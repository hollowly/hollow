<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\GoodsClassRightController;

class GoodsClass extends Model
{
	use HasFactory;
	protected $keyType = 'string';
	protected $guarded = [];
	public $timestamps = false;

	// 建立后代关系
	// public function Goods()
	// {
	// 	return $this->hasMany(GoodsClassRightController::class, 'id', 'id');
	// }
	// public function Goods()
	// {
	// 	return $this->belongsTo(Goods::class, 'cid', 'id');
	// }
}
