$(document).ready(function() {

	var busy = false;
	initframes = $('.space-frame')
	$('.vinyl')[0].volume = 0.25

	for(i = 1; i < initframes.length -1; i++ ){
		opacity = $(initframes[i]).css('opacity');
		audio = $(initframes[i]).find(".audioplayer");
		audio[0].volume = 0;
		audio[0].play();
	}


	// $(window).scroll(function () {
	// 	if (busy)
	// 		return;
	// 	busy = true

	// 	for(i = 1; i < frames.length-1; i++ ){

	// 		opacity = $(frames[i]).css('opacity');
	// 		audio = $(frames[i]).find(".audioplayer");
	// 		audio[0].volume = opacity;
	// 	}

	// 	busy = false;
	// });

	

});

function imagError (element) {
	element.onerror='';
    element.src= 'http://placekitten.com/300/300'
}

function follow (userId, url) {
	console.log(window.location.href + "follow/" + userId);
	$.post(window.location.href + "follow/" + userId, function  (data) {
		console.log('success');
	})
}




