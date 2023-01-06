<?php

use App\Http\Controllers\AlumniController;
use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\EmailVerificationRequestController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\EventUserController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SettingProfilController;
use Illuminate\Support\Facades\Route;

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
Route::get('', BerandaController::class)->name('beranda');



Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'index'])->name('login');
    Route::post('login', [LoginController::class, 'store']);
    Route::get('registrasi', [RegisterController::class, 'index'])->name('registrasi');
    Route::post('registrasi', [RegisterController::class, 'store']);
});



Route::prefix('admin')->middleware(['auth', 'verified'])->group(function () {

    Route::get('setting', [SettingProfilController::class, 'index'])->name('setting');
    Route::get('data-anggota', [AnggotaController::class, 'index'])->name('anggota');
    Route::post('data-anggota', [AnggotaController::class, 'store']);
    Route::put('data-anggota-update', [AnggotaController::class, 'update'])->name('anggota-update');
    Route::delete('data-anggota-delete', [AnggotaController::class, 'delete'])->name('anggota-delete');


    Route::get('data-alumni', [AlumniController::class, 'index'])->name('alumni');
    Route::get('data-event', [EventController::class, 'index'])->name('event');
    Route::get('data-event-create', [EventController::class, 'create'])->name('event-create');
    Route::post('data-event-create', [EventController::class, 'store']);
    Route::get('data-event-update/{slug}', [EventController::class, 'update'])->name('event-update');
    Route::patch('data-event-update', [EventController::class, 'store_update'])->name('event-update-patch');
});


Route::post('logout', function () {
    auth()->logout();
})->name('logout');
