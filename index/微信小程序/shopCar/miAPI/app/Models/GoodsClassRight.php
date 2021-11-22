<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoodsClassRight extends Model
{
	use HasFactory;
	protected $table = 'goods_class_right';
	protected $keyType = 'string';
	protected $guarded = [];
	public $timestamps = false;
}
