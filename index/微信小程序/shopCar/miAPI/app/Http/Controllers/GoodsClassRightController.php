<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GoodsClassRight;

class GoodsClassRightController extends Controller
{
	function all()
	{
		return GoodsClassRight::all();
	}
}
