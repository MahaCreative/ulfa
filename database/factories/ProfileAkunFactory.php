<?php

namespace Database\Factories;

use App\Models\Angkatan;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProfileAkunFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $jk = ['laki-laki', 'perempuan'];
        $status = ['anggota', 'alumni'];
        return [
            'user_id' => User::factory()->create(),
            'nama_lengkap' => $this->faker->name(),
            'jenis_kelamin' => $jk[rand(0, 1)],
            'alamat' => $this->faker->address(),
            'tempat_lahir' => $this->faker->address(),
            'tanggal_lahir' => $this->faker->date(),
            'telp' => '0821' . rand(11111111, 99999999),
            'angkatan_id' => Angkatan::factory()->create(),
            'status_anggota' => $status[rand(0, 1)],
            'thumbnail' => 'images/wisuda.png',
            'tempat_bekerja' => '',
        ];
    }
}
