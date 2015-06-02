$(document).ready(function(){
	var $thumbs = $('.thumbs img'),
		$images = $('.images img'),
		$nextBtn = $('.next-btn'),
		$prevBtn = $('.prev-btn'),
		lastIndex = $images.length-1,
		currentIndex = 0,
		delay = 4000,
		timer;

	function changeImage(newIndex){
		resetTimer();
		$images.eq(currentIndex).velocity('fadeOut', {duration: 600});
		$thumbs.eq(currentIndex).removeClass('selected');
		currentIndex = newIndex;
		$images.eq(currentIndex).velocity('fadeIn', {duration: 200});
		$thumbs.eq(currentIndex).addClass('selected');
	}

	function nextImage(){
		var newIndex = (currentIndex < lastIndex)? currentIndex+1 : 0;
		changeImage(newIndex);
	}

	function startTimer() {
		timer = setInterval(nextImage, delay)
	}

	function resetTimer() {
		clearInterval(timer);
		startTimer();
	}

	//Initialisation
	$images.hide().eq(currentIndex).show();
	$thumbs.eq(currentIndex).addClass('selected');

	timer = setInterval(nextImage, delay);

	$thumbs.click(function(){
		var newIndex = $thumbs.index(this);
		changeImage(newIndex);
	});

	$nextBtn.click(nextImage);

	$prevBtn.click(function(){
		var newIndex =(currentIndex > 0)? currentIndex-1 : lastIndex;
		changeImage(newIndex);
	});
});
