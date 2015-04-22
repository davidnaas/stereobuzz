$(document).ready(function() {

	frames = $('.space-frame');

	for(i = 0; i < frames.length; i++ ){
		opacity = $(frames[i]).css('opacity', 0);
		audio = $(frames[i]).find(".audioplayer");
		audio[0].volume = 0;
	}


	$(window).scroll(function () {
		frames = $('.space-frame');

		for(i = 0; i < frames.length; i++ ){

			opacity = $(frames[i]).css('opacity');
			console.log(opacity);
			audio = $(frames[i]).find(".audioplayer");
			audio[0].volume = opacity;
		}
	});
});