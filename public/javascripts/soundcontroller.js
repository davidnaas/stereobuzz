$(document).ready(function() {

	var busy = false;
	frames = $('.space-frame');



	for(i = 1; i < frames.length -1; i++ ){
		opacity = $(frames[i]).css('opacity', 0);
		audio = $(frames[i]).find(".audioplayer");
		audio[0].volume = 0;
	}


	$(window).scroll(function () {
		if (busy)
			return;
		busy = true

		for(i = 1; i < frames.length-1; i++ ){

			opacity = $(frames[i]).css('opacity');
			audio = $(frames[i]).find(".audioplayer");
			audio[0].volume = opacity;
		}

		busy = false;
	});

});

function follow (userId, url) {
	console.log(window.location.href + "follow/" + userId);
	$.post(window.location.href + "follow/" + userId, function  (data) {
		console.log('success');
	})
}
