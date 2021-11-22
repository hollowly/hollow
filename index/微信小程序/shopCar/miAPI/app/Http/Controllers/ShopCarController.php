<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\shopCar;

class ShopCarController extends Controller
{
	function all(Request $req)
	{
		// if ($req->uid) {
		return shopCar::all();
		// }
	}
}
