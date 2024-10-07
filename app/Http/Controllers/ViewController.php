<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Manage;
class ViewController extends Controller
{
    public function index()
    {
        // Fetch all mass intentions from the manage table
        $intentions = Manage::orderBy('DateOfMass', 'desc')->get()
        ;
        // Return the view with intentions data
        return Inertia::render('View/Index', [
            'intentions' => $intentions,
        ]);
    }
}
