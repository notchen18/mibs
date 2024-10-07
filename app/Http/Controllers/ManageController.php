<?php

namespace App\Http\Controllers;

use App\Models\Manage;
use App\Http\Requests\StoreManageRequest;
use App\Http\Requests\UpdateManageRequest;
use App\Http\Resources\ManageResource;
use Illuminate\Support\Facades\Auth;

use Inertia\Inertia;

class ManageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    $query = Manage::query();
    
    $sortField = request("sort_field", 'created_at');
    $sortDirection = request("sort_direction", "desc");

    // Filter for OfferedFor (Gimisahan)
    if (request("OfferedFor")) {
        $query->where("OfferedFor", "like", "%" . request("OfferedFor") . "%");
    }

    // Filter for Offerer (Nagpamisa)
    if (request("Offerer")) {
        $query->where("Offerer", "like", "%" . request("Offerer") . "%");
    }

    // Filter for status
    if (request("status")) {
        $query->where("status", request("status"));
    }

    if (request("ContactNo")) {
        $query->where("ContactNo", "like", "%" . request("ContactNo") . "%");
    }

    $manage = $query->orderBy($sortField, $sortDirection)->paginate(10);
    
    return inertia("Manage/Index", [
        "manage" => ManageResource::collection($manage),
        'queryParams' => request()->query() ?: null,
        'success' => session('success'),
    ]);
}

    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Manage/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreManageRequest $request)
    {
        $data = $request -> validated();
        $data ['created_by'] = Auth::id();
        $data ['updated_by'] = Auth::id();
        Manage::create($data);

        return to_route('manage.index')->with('success', 'Intention was successfully added');
    }

    /**
     * Display the specified resource.
     */
    public function show(Manage $manage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Manage $manage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateManageRequest $request, Manage $manage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Manage $manage)
    {
        $manage->delete();
        return to_route('manage.index') ->with('success', 'Intention was Deleted');
    }
}
