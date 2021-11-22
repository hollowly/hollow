<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderImg;

class OrderImgController extends Controller
{
	function all()
	{
		return OrderImg::all();
	}
}
