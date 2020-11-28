<?php

	namespace app\Http\Controllers;

	use Illuminate\HttpRequest;

	class StudentConteroller extends Controller {
		public function index() {
			$students = \App\Stundet::all();
			return view(view:'stundet',['stundets'=> $students]);
		}
	}
?>