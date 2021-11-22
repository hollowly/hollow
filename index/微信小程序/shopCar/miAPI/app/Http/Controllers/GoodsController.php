<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Goods;

class GoodsController extends Controller
{
	function all()
	{
		return Goods::orderBy('id')->get();
	}
}
