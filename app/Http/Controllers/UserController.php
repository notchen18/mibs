<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserCrudResource;
use Illuminate\Support\Facades\Hash;

use function Laravel\Prompts\password;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = User::query();
    
        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");
    
        // Filter by name
        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
    
        // Filter by email
        if (request("email")) {
            $query->where("email", "like", "%" . request("email") . "%");
        }
    
        $user = $query->orderBy($sortField, $sortDirection)->paginate(10);
        
        return inertia("User/Index", [
            "user" => UserCrudResource::collection($user),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('User/Create');
    }

    /**
     * Store a newly created user in storage.
     */
    public function store(StoreUserRequest $request)
    {
        // Create a new user
        $data = $request -> validated();
        $data['password'] = bcrypt($data['password']);
        User::create($data);

        return redirect()->route('user.index')->with('success', 'User created successfully.');
    }

    /**
     * Display the specified user.
     */
    public function show(User $user)
    {
        return inertia('User/Show', [
            'user' => new UserResource($user),
        ]);
    }

    /**
     * Show the form for editing the specified user.
     */
    public function edit(User $user)
    {
        return inertia('User/Edit', [
            'user' => new UserCrudResource($user),
        ]);
    }

    /**
     * Update the specified user in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
       
            $data = $request->validated();

            
            if ($request->filled('password')) {
                $data['password'] = Hash::make($request->password);
            } else {
            
                unset($data['password']);
            }

            
            $user->update($data);

            return redirect()->route('user.index')->with('success', 'User updated successfully.');
    }

    /**
     * Remove the specified user from storage.
     */
    public function destroy(User $user)
    {
        $name = $user->name; 
        $user->delete();
    
        return to_route('user.index')->with('success', "User \"$name\" deleted successfully.");
    }
    
}
