<?php

namespace App\Http\Controllers;

use App\Models\Manage;
use Illuminate\Http\Request;
use Carbon\Carbon;
class DashboardController extends Controller
{
    public function index () {
        //count all mass intention
        $totalmassint = Manage::count();
        //count upcoming mass intentions for this week
        $startOfWeek = Carbon::now()->startOfWeek();
        $endOfWeek = Carbon::now()->endOfWeek();
        $upcomingMassesThisWeek = Manage::whereBetween('DateOfMass', [$startOfWeek, $endOfWeek])->count();
        //count mass intentions scheduled on sunday
        $sundayMasses = Manage::whereBetween('DateOfMass', [$startOfWeek, $endOfWeek])
        ->get()
        ->filter(function($mass) {
            return Carbon::parse($mass->DateOfMass)->isSunday();
        })
        ->count();
        //retrieve mass intentions for this week, sorted by date and time
        $massIntentionsThisWeek = Manage::whereBetween('DateOfMass', [$startOfWeek, $endOfWeek])
        ->orderBy('DateOfMass')
        ->orderBy('TimeOfMass')
        ->get();

        return inertia('Dashboard', [
            'totalMassInt' => $totalmassint,
            'upcomingMassesThisWeek' => $upcomingMassesThisWeek,
            'sundayMasses' => $sundayMasses,
            'massIntentionsThisWeek' => $massIntentionsThisWeek
        ]);
    }
}
