<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('user.user_master');//tahole aitar mane ki    
        //return view('home'); login korar por home a mane dashboard a jai
    }

    public function authUser(){
        return response()->json([
            'user' => \Auth::user()
        ],200);
    }

}
