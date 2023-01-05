<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AngkatanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'angkatan' => rand(2000, 2023)
        ];
    }
}
