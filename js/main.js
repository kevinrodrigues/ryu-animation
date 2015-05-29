(function() {
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
	// MIT license

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function() {

	var canvas,
		ryuImage,
		ryu;


	function looper() {

		window.requestAnimationFrame(looper);

		ryu.update();
		ryu.render();
	}
		

	function sprite(options) {
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;

		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		that.loop = options.loop;

		console.log(that);

		// context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
		
		that.render = function() {

			that.context.clearRect(0, 0, that.width, that.height);
			// console.log(that.image);
			//draw animation..
			that.context.drawImage(
			that.image,
			frameIndex * that.width / numberOfFrames,
			0,
			that.width,
			that.height,
			0,
			0,
			that.width,
			that.height);
		};

		that.update = function() {

			tickCount += 1;

			if (tickCount > ticksPerFrame) {

				tickCount = 0;

				if (frameIndex < numberOfFrames - 1) {
					//go to next frame..
					frameIndex += 1;
				} else {
					frameIndex = 0;
				}

			}
		};


		// console.log(that);
		return that;

	}

	

	// Get canvas
	canvas = document.getElementById('ryu');
	canvas.width = 146;
	canvas.height = 92;


	ryuImage = new Image();

	ryuImage.src = 'img/sprite.png';
	//create sprite
	ryu = sprite({
	    context: canvas.getContext('2d'),
	    width: 2465,
	    height: 92,
	    image: ryuImage,
	    numberOfFrames: 17,
	    ticksPerFrame: 6	
	});


	

	ryuImage.addEventListener('load', looper);

}());


