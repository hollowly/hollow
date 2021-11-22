<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GoodsClass;

class GoodsClassController extends Controller
{
	function all()
	{
		return GoodsClass::orderBy('sort')->get();
	}

	// 读取商品分类及商品信息
	// function classWidthGoods()
	// {
	// 	return GoodsClass::orderBy('sort')->with('GoodsClassRightController')->get();
	// }
}
