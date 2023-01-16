<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingProfilController extends Controller
{
    public function index(Request $request)
    {
        $rolesName = $request->user()->getRoleNames();
        $profile = $request->user()->profile()->first();
        return inertia('SettingProfil/SettingProfile', compact('profile', 'rolesName'));
    }

    public function update_akun(Request $request)
    {
        $user = $request->user();
        $email = $request->email === null ? $request->user()->email : $request->email;
        $name = $request->name === null ? $request->user()->name : $request->name;

        $attr= $request->validate([
            'password' =>'required|min:6',
            'password_confirmation' =>'required|same:password',
        ]);
        
        $user->update([
            'name' => $name,
            'email' => $email,
            'password' =>bcrypt($request->password)
        ]);
                return redirect()->back()->with([
                'type' => 'success',
                'message' => 'Berhasil mengedit akun'
            ]);
    }

    public function update_profile(Request $request)
    {
        $user = $request->user()->profile()->first();
        $url = $request->file('thumbnail') ? $request->file('thumbnail')->storeAs('images/profile', $request->file('thumbnail')->getClientOriginalName()) : $user->thumbnail;
        // dd($request->all());
        // dd($url);
        $user->update([
            'user_id' => $request->user()->id,
            'nama_lengkap' => $request->data['nama_lengkap'],
            'jenis_kelamin' => $request->data['jenis_kelamin'],
            'alamat' => $request->data['alamat'],
            'tempat_lahir' => $request->data['tempat_lahir'],
            'tanggal_lahir' => $request->data['tanggal_lahir'],
            'telp' => $request->data['telp'],
            'angkatan_id' => $request->data['angkatan'],
            'status_anggota' => $request->data['status_anggota'],
            'thumbnail' => $url,
            'tempat_bekerja' => $request->data['tempat_bekerja'],
        ]);
                return redirect()->back()->with([
                'type' => 'success',
                'message' => 'Berhasil mengedit profile'
            ]);
    }
    public function post_profile(Request $request){
        $user = $request->user();
        $url = $request->file('thumbnail') ? $request->file('thumbnail')->storeAs('images/profile', $request->file('thumbnail')->getClientOriginalName()) : null;
        $user->profile()->create([
            'user_id' => $request->user()->id,
            'nama_lengkap' => $request->nama_lengkap,
            'jenis_kelamin' => $request->jenis_kelamin,
            'alamat' => $request->alamat,
            'tempat_lahir' => $request->tempat_lahir,
            'tanggal_lahir' => $request->tanggal_lahir,
            'telp' => $request->telp,
            'angkatan_id' => $request->angkatan,
            'status_anggota' => $request->status_anggota,
            'thumbnail' => $url,
            'tempat_bekerja' => $request->tempat_bekerja,
        ]);
                return redirect()->back()->with([
                'type' => 'success',
                'message' => 'Berhasil membuat profile'
            ]);
    }
}
