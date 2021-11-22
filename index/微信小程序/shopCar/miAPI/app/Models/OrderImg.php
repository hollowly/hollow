<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderImg extends Model
{
	use HasFactory;
	protected $table = 'order_imgs';
	protected $keyType = 'string';
	protected $guarded = [];
	public $timestamps = false;
}
