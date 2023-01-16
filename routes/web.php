<?php

use App\Http\Controllers\AlumniController;
use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\AngkatanController;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmailVerificationRequestController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventUserController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SettingProfilController;
use Illuminate\Support\Facades\Route;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('email/verify/{id}/{hash}', [EmailVerificationRequestController::class, 'index'])->name('verification.verify');
Route::get('email/verify', [EmailVerificationRequestController::class, 'email_verify'])->name('verification.notice');
Route::get('email/verification-notification', [EmailVerificationRequestController::class, 'resend_email'])->name('resend')->middleware('throttle:6,1');
// Lupa password
Route::get('forgot-password', [ForgotPasswordController::class, 'index'])->name('forgot_password');
Route::post('forgot-password', [ForgotPasswordController::class, 'email_store']);
Route::get('reset-password/{token}', [ForgotPasswordController::class, 'reset_password'])->name('password.reset');
Route::post('reset-password-store', [ForgotPasswordController::class, 'reset_password_store'])->name('password.update');

Route::get('event', [EventUserController::class, 'index'])->name('event-user');
Route::get('event-show/{slug}', [EventUserController::class, 'show'])->name('event-show');
Route::get('event-search', [EventUserController::class, 'search'])->name('event-search');
Route::get('', BerandaController::class)->name('beranda');



Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'index'])->name('login');
    Route::post('login', [LoginController::class, 'store']);
    Route::get('registrasi', [RegisterController::class, 'index'])->name('registrasi');
    Route::post('registrasi', [RegisterController::class, 'store']);
});


Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('angkatan', [AngkatanController::class, 'index'])->name('angkatan');
    Route::post('angkatan', [AngkatanController::class, 'store']);
    Route::put('angkatan-update', [AngkatanController::class, 'update'])->name('angkatan-update');
    Route::delete('angkatan-delete', [AngkatanController::class, 'delete'])->name('angkatan-delete');

    Route::get('setting', [SettingProfilController::class, 'index'])->name('setting');
    Route::put('setting-update-akun', [SettingProfilController::class, 'update_akun'])->name('update-akun');
    Route::post('setting-post-profile', [SettingProfilController::class, 'post_profile'])->name('post-profile');
    Route::put('setting-update-profile', [SettingProfilController::class, 'update_profile'])->name('update-profile');


    Route::get('data-anggota', [AnggotaController::class, 'index'])->name('anggota');
    Route::post('data-anggota', [AnggotaController::class, 'store']);
    Route::put('data-anggota-update', [AnggotaController::class, 'update'])->name('anggota-update');
    Route::delete('data-anggota-delete', [AnggotaController::class, 'delete'])->name('anggota-delete');


    Route::get('data-alumni', [AlumniController::class, 'index'])->name('alumni');
    Route::post('data-alumni', [AlumniController::class, 'store']);
    Route::put('data-alumni-update', [AlumniController::class, 'update'])->name('alumni-update');
    Route::delete('data-alumni-delete', [AlumniController::class, 'delete'])->name('alumni-delete');


    Route::get('data-event', [EventController::class, 'index'])->name('event');
    Route::get('data-event-create', [EventController::class, 'create'])->name('event-create');
    Route::post('data-event-create', [EventController::class, 'store']);
    Route::get('data-event-update/{slug}', [EventController::class, 'update'])->name('event-update');
    Route::patch('data-event-update', [EventController::class, 'store_update'])->name('event-update-patch');
    Route::delete('data-event-delete/{slug}', [EventController::class, 'delete'])->name('event-delete');
});


Route::post('logout', function () {
    auth()->logout();
    return redirect()->route('beranda')->with([
        'type' => 'success',
        'message' => 'Logout Successfully'
     ]);
})->name('logout');

Route::get('logout', function () {
     auth()->logout();
     return redirect()->route('beranda')->with([
        'type' => 'success',
        'message' => 'Logout Successfully'
     ]);
})->name('logout');