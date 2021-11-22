<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;

class TeacherController extends Controller
{
	// 获取数据库所有信息
	function all()
	{
		return Teacher::all();
	}

	// 接收用户的账户、密码、进行身份认证
	function login(Request $req)
	{
		$rule = [
			'uid' => 'required|string|max:20',
			'pwd' => 'required|string',
		];
		$req->validate($rule);

		$teacher = Teacher::find($req->uid);
		if ($teacher && Hash::check($req->pwd, $teacher->password)) {
			// 如果密码账户都正确，则生成Token，存储并派发给用户
			$token = $teacher->CreateToken($req->uid);
			return response()->json(['code' => 1, 'token' => $token]);
		} else {
			return response()->json(['code' => 0, 'msg' => '账户或密码错误']);
		}
	}
}
