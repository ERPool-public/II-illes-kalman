<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthVue
{
    public function handle(Request $request, Closure $next)
    {
        // Ellenőrizzük, hogy a felhasználó be van-e jelentkezve.
        if (auth()->check()) {
            // A felhasználó be van jelentkezve, ezért engedélyezzük az oldal elérését.
            return $next($request);
        } else {
            // A felhasználó nincs bejelentkezve, ezért átirányítjuk a bejelentkezési oldalra.
            return redirect()->route('login');
        }
    }
}
