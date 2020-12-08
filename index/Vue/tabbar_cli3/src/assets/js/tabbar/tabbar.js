import $ from '../node_modules/jquery/dist/jquery'

$(function() {
	$('.tabbar-item').click(function() {
		$(this).addClass('active')
	})
})