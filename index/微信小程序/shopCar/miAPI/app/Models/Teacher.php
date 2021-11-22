<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Teacher extends Model
{
	use HasFactory;
	protected $keyType = 'string';
	protected $table = 'teachers';
	protected $primaryKey = 'tid';
	protected $guarded = [];
	public $timestamps = false;

	// 创建一个生成 tooken 的函数
	public function CreateToken($uid)
	{
		$token = Str::random(128);
		// 混合用户名，在进行哈希运算，生成一个不重复的令牌字符串
		$this->api_token = $uid . hash('sha256', $token);
		// 1. 返回给用户
		$this->save();
		// 2.存入数据库(以便用户读取数据库时携带令牌)
		return $this->api_token;
	}
}
