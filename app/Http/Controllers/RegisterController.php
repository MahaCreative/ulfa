<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function index()
    {
        return inertia('Auth/Register');
    }
    public function store(Request $request)
    {
        // dd($request->all());
        $attr = $request->validate([
            'name' => ['required', 'min:6', 'unique:users,name', 'alpha_num'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'confirmed', 'min:6', 'alpha_num'],
        ]);
        $attr['password'] = bcrypt($attr['password']);
        $user = User::create($attr);
        $user->assignRole('user');
        if ($user) {
            // $user->assignRole('admin');

            auth()->login($user);
            $user->sendEmailVerificationNotification();
            return redirect()->route('verification.notice');
            // return redirect()->back()->with([
            //     'type' => 'success',
            //     'message' => 'Berhasil Menambahkan Data'
            // ]);
        }
    }
}
