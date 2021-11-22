<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\myOptionImg;

class MyOptionImgController extends Controller
{
	function all()
	{
		return myOptionImg::all();
	}
}
