<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::group(['middleware' => 'auth'], function () {

    Route::get('user-dashboard', [HomeController::class, 'index'])->name('user.dashboard');
    Route::get('/', [HomeController::class, 'authUser']);
});