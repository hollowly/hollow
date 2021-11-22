<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carousels extends Model
{
	use HasFactory;
	protected $keyType = 'string';
	protected $guarded = [];
	public $timestamps = false;
}
