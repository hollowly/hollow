<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recommend;

class RecommendController extends Controller
{
	function all()
	{
		return Recommend::orderBy('id')->get();
	}
}
