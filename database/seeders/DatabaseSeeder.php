<?php

namespace Database\Seeders;

use App\Models\ProfileAkun;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $rolesss = ['user'];

        User::factory()->create();
        return $this->call([
            RoleSeeder::class,
        ]);

    
    }
}