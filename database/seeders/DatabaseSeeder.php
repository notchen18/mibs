<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Manage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'ChurchStaff',
            'email' => 'church12.staff@gmail.com',
            'password' => bcrypt('church1-')
        ]);

        Manage::factory()
        ->count(50)
        ->create();
    }
}
