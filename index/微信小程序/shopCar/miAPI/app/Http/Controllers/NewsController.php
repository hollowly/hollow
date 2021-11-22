<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;


class NewsController extends Controller
{
	function all()
	{
		return News::all();
	}

	function find($id)
	{
		return News::find($id);
	}

	function setFace(Request $req)
	{
		// Log::info($req);
		// return $req;
		$face = $req->face;
		$face = str_replace('data:image/jpeg;base64,', '', $face);
		$face = str_replace(' ', '+', $face);
		// 把图片存储到指定位置
		$facePath = 'facehollow1.jpg';
		Storage::disk('face')->put($facePath, base64_decode($face));

		// Storage::disk('face')->delete($oldFace);
		return $facePath;
	}
}
