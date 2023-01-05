<?php

use App\Http\Controllers\AlumniController;
use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\EventController;
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

Route::get('', BerandaController::class)->name('beranda');
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
