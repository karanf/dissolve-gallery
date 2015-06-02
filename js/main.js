$(document).ready(function(){
	var $thumbs = $('.thumbs img'),
		$images = $('.images img'),
		currentIndex = 0;


	//Initialisation
	$images.hide().eq(currentIndex).show();
	$thumbs.eq(currentIndex).addClass('selected');

	$thumbs.click(function(){
		$images.eq(currentIndex).velocity('fadeOut', {duration: 600});
		$thumbs.eq(currentIndex).removeClass('selected');
		currentIndex = $thumbs.index(this);
		$images.eq(currentIndex).velocity('fadeIn', {duration: 200});
		$thumbs.eq(currentIndex).addClass('selected');
	});
});

// Click thumbnail

// - Change the displayed image to the corresponding index value

// - Transition dissolve

// - Selected state for the thumbnail