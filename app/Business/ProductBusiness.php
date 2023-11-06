<?php

namespace App\Business;

use App\Models\Product;

class ProductBusiness
{
    public function isProductExists($name)
    {
        return Product::where('name', 'ilike', $name)->exists();
    }
}
