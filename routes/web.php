<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

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
//custom route deine for admin & user
Route::prefix('admin')->group(base_path('routes/admin.php'));
Route::prefix('user')->group(base_path('routes/user.php'));


Route::get('/', function () {
    return view('user.user_master');
});

Auth::routes();

/*
    After login user goto dashboard via the route using HomeController
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
*/

Route::get('user-login', [HomeController::class, 'index'])->name('login');


//to connect vue router after '/' defined the following code
Route::get('/{path}', function () {
    return view('user.user_master');
});

/*
Route::get('/phonebook/{name}',function(){
    return redirect('/');
})->where('name','[A-Za-z]+');
*/