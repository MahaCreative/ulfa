<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('Auth/Login');
    }
    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'confirmed'],
            'password_confirmation' => ['required']
        ]);
        

        if (Auth::attempt($request->only('email', 'password_confirmation', 'password'))) {
            session()->regenerate();
            return redirect()->route('dashboard')->with([
                'type' => 'success',
                'message' => 'Berhasil Login'
            ]);
        } else{
        session()->regenerate();
        return redirect()->back()->with([
                'type' => 'errors',
                'message' => 'Gagal Login'
            ]);
        }
    }
}