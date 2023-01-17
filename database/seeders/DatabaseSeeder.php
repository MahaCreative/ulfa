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

        return $this->call([
            RoleSeeder::class,
           
        ]);
                 $user_admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'),
         ]);
        $user_admin->assignRole('admin');
    
    }
}