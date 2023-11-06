<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;



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

Route::get('/logout', [AuthController::class, 'logout']);

if (!Auth::check()) {
    // Ha a felhasználó nincs bejelentkezve, akkor csak a /login és a /register URL legyen elérhető számára.
    Route::get('/', function () {
        return redirect()->route('login');
    })->where('any', '^(?!login|register).*$');

    Route::get('/login', function () {
        return Inertia::render('Auth/Login', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    })->name('login');

    Route::post('/register', function () {
        return Inertia::render('Auth/Register');
    })->name('register');
} else {

    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->name('dashboard')->middleware('auth:sanctum');
}

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');


Route::get('/products/list', [ProductController::class, 'list'])->name('products.list');

Route::get('/products/store', function () {
    return Inertia::render('ProductCreate');
})->name('products.store');

Route::post('/products/store', [ProductController::class, 'store'])->name('products.store');





// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::middleware([
//     'auth:sanctum',
//     config('jetstream.auth_session'),
//     'verified',
// ])->group(function () {
//     Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard');
//     })->name('dashboard');


// });



