$(document).ready(function() {
	$(".hamburger").on("click", function(){
		$(".hamburger").toggleClass("is-active");
		$(".header-nav ul").toggleClass("openme");
	})
});