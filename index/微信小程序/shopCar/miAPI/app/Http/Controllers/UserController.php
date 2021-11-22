<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
	function login(Request $req)
	{
		$rule = [
			'uid' => 'required|string|max:20',
			'pwd' => 'required|string',
		];
		$req->validate($rule);

		$user = User::find($req->uid);
		if ($user && Hash::check($req->pwd, $user->password)) {
			// 如果密码账户都正确，则生成Token，存储并派发给用户
			$token = $user->CreateToken($req->uid);
			return response()->json(['code' => 1, 'token' => $token, 'msg' => '登录成功.正在跳转...']);
		} else {
			return response()->json(['code' => 0, 'msg' => '账户或密码错误']);
		}
	}
}
