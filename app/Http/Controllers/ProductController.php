<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{


    public function store(Request $request)
    {
        $request->validate([
            'name' => [
                'required',
                'string',
                'unique:products,name,NULL,id',
                function ($attribute, $value, $fail) {
                    // Ellenőrzés, ha már létezik ilyen név kisbetűssé alakítva
                    $nameLower = strtolower($value);
                    if (Product::whereRaw('LOWER(name) = ?', $nameLower)->exists()) {
                        $fail('Ez a termék név már létezik az adatbázisban.');
                    }
                }
            ],
            'oneUnitPrice' => 'required|numeric',
            'threeUnitPrice' => 'required|numeric',
            'fiveUnitPrice' => 'required|numeric',
        ]);

        Product::create($request->all());

        //return redirect()->route('products.index');
    }


    public function list()
    {
        $products = Product::orderBy('name', 'asc')->get(); // Termékek lekérése ABC sorrendben
        return response()->json($products);
    }


}
