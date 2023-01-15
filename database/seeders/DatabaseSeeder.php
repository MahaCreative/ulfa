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
        ProfileAkun::factory(10)->create();
        $rolesss = ['user'];
        $user = User::all();

        return $this->call([
            RoleSeeder::class
        ]);
        foreach ($user as $item) {
            $item->assignRole($rolesss[rand(0, 1)]);
        }
    }
}
