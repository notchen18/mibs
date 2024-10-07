<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Manage>
 */
class ManageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $date = Carbon::now()->next(Carbon::SUNDAY);
        return [
            'IntentionType' => $this->faker->randomElement(['Thanksgiving', 'Repose of the Soul']),
            'DateOfMass' => $this->faker->date(),
            'TimeOfMass' => $this->faker->randomElement(['1st', '2nd', '3rd', '4th', '5th', '6th', '7th']),
            'Offerer' => $this->faker->name(),
            'ContactNo' => $this->faker->optional()->phoneNumber(),
            'OfferedFor' => $this->faker->name(),
            'status' => $this->faker->randomElement(['pending', 'completed']),
            'created_by' => 1,
            'updated_by' => 1,
        ];
    }
}
