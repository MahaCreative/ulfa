<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingProfilController extends Controller
{
    public function index()
    {
        return inertia('SettingProfil/SettingProfile');
    }
}
