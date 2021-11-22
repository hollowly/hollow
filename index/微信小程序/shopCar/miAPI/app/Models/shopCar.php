<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class shopCar extends Model
{
	use HasFactory;
	protected $table = 'shop_cars';
	protected $keyType = 'string';
	protected $guarded = [];
	public $timestamps = false;


	function Goods()
	{
		return $this->belongsTo(Goods::class, 'gid', 'id');
	}

	function User()
	{
		return $this->belongsTo(User::class, 'uid', 'id');
	}
}
