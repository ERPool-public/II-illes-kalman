<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class RegisterController extends Controller
{
    public function index()
    {
        return view('auth.register');
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required', 'min:8', 'confirmed'],
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator->errors());
        }

        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));

        // A kötelező mezők megjelenítése
        $requiredFields = ['name', 'email', 'password', 'passwordConfirm'];
        foreach ($requiredFields as $field) {
            if ($request->input($field) === '') {
                $validator->errors()->add($field, 'Ez a mező kötelező.');
            }
        }

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator->errors());
        }

        $user->save();

        Auth::login($user);

        return redirect()->intended('dahboard');
    }
}
