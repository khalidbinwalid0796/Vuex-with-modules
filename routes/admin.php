<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\LoginController;

    //login get & post route
    Route::get('/login',[LoginController::class,'showLoginForm'])->name('admin.login');
    Route::post('/login',[LoginController::class,'login'])->name('admin.login.post');

    Route::group(['middleware'=>'auth:admin'],function (){

        Route::get('/', function(){
            return view('admin.admin_master');
        })->name('admin.dashboard');

        //admin user details
        Route::get('user',function () {
            return response()->json([
                'admin' => \Auth::guard('admin')->user(),
            ],200 );
        });

        //logout
        Route::get('/logout',[LoginController::class,'logout'])->name('admin.logout');
    });
    
Route::get('/{path}', function () {
    return view('admin.admin_master');
});