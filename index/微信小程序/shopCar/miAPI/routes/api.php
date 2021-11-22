<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\TeacherController;
use App\Http\Controllers\GoodsClassController;
use App\Http\Controllers\GoodsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CarouselsController;
use App\Http\Controllers\RecommendController;
use App\Http\Controllers\GoodsClassRightController;
use App\Http\Controllers\ShopCarController;
use App\Http\Controllers\OrderImgController;
use App\Http\Controllers\MyOptionImgController;
use App\Http\Controllers\NewsController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
	return $request->user();
});

// 认证机制：
// web		session 会话 不能跨站
// api		token   令牌 允许跨站

// 商品分类gridList
Route::get('getgridList', [GoodsClassController::class, 'all']);
// Route::get('getClassWidthGoods', [GoodsClassController::class, 'classWidthGoods']);

Route::get('getgoodList', [GoodsController::class, 'all']);

Route::get('getswiperList', [CarouselsController::class, 'all']);

Route::get('getrecommendList', [RecommendController::class, 'all']);

Route::get('getGoodsClassRight', [GoodsClassRightController::class, 'all']);

Route::get('getShopCar', [ShopCarController::class, 'all']);

Route::get('getOrderImg', [OrderImgController::class, 'all']);

Route::get('getMyOptionImg', [MyOptionImgController::class, 'all']);

Route::get('getNews', [NewsController::class, 'all']);
Route::get('news/{id}', [NewsController::class, 'find']);

Route::post('/setFace', [NewsController::class, 'setFace']);	//更改头像


// 用户登录认证
Route::post('login', [UserController::class, 'login']);


Route::middleware('auth:api')->group(function () {
});









// // 没有经过认证就能访问：开放接口
// Route::post('/login', [TeacherController::class, 'login']);
// // 如果需要数据需要保护，也就是登录自己才能访问
// Route::middleware('auth:api')->group(function () {
// 	Route::get('getuser', [TeacherController::class, 'all']);
// 	Route::get('getTeacher', [TeacherController::class, 'all']);
// });
