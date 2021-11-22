<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Carousels;

class CarouselsController extends Controller
{
	function all()
	{
		return Carousels::orderBy('id')->get();
	}
}
