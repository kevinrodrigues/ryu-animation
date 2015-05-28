(function() {

	var canvas,
		ryuImage,
		ryu;


		ryuImage = new Image();

		ryuImage.src = 'img/sprite.png';


	function sprite(options) {
		var that = {};

		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;

		return that;
	}

	// Get canvas
	canvas = document.getElementById('ryu');
	canvas.width = 100;
	canvas.height = 100;

	//create sprite
	ryu = sprite({
	    context: canvas.getContext('2d'),
	    width: 100,
	    height: 100,
	    image: ryuImage
	});

}());


