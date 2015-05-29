(function() {

	var canvas,
		ryuImage,
		ryu;



		

	function sprite(options) {
		var that = {};

		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;

		// context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
		
		that.render = function() {

			// console.log(that.image);
			//draw animation..
			that.context.drawImage(
			that.image,
			0,
			0,
			that.width,
			that.height,
			0,
			0,
			that.width,
			that.height);
		};


		// console.log(that);

		return that;

	}

	// Get canvas
	canvas = document.getElementById('ryu');
	canvas.width = 120;
	canvas.height = 92;


	ryuImage = new Image();

	ryuImage.src = 'img/sprite.png';
	//create sprite
	ryu = sprite({
	    context: canvas.getContext('2d'),
	    width: 120,
	    height: 92,
	    image: ryuImage
	});

	// console.log(ryu);

	function start() {
		ryu.render();
	}
	

	ryuImage.addEventListener('load', start);

}());


