$(document).ready(function() {
	$(window).scroll(function () {
		frames = $('.space-frame');

		for(i = 0; i < frames.length; i++ ){

			opacity = $(frames[i]).css('opacity');
			//console.log(opacity);
			audio = $(frames[i]).find(".audioplayer");
			audio[0].volume = opacity;
		}
	});
});