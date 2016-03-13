//Functions for the "Health Tracker" web app.
//Author:	Chris Moth
//Copyright:	Churchdale Massive Gaming
//Created:	27/07/2015
//All other copyright material is property of its respective owners.

//Short-hand "$(document).ready" function
$(function(){

//Prevents bounce scrolling on Apple devices.
//Author:	https://gist.github.com/amolk
//DateAcquired:	26/07/2015
	
	document.body.addEventListener('touchmove', function(event) {
 		console.log(event.source);
        	event.preventDefault();
    	}, false);

    	window.onresize = function() {
      		$(document.body).width(window.innerWidth).height(window.innerHeight);
    	}

    	$(function() {
      		window.onresize();
    	});


//Prevents delay on button clicks when using "tap".
//Author:	Michael Dellanoce 
//Source:	http://phonegap-tips.com/articles/fast-touch-event-handling-eliminate-click-delay.html
//DateAcquired:	26/02/2014
//Modified: 	28/07/2015 (Added functionality (one word(!)) to prevent delay on devices using pointers.)

	$.event.special.tap = {				
		setup: function() {				
			var self = this,				
			$self = $(self);
	
			// Bind touch start
			$self.on('touchstart click', function(startEvent) {
				// Save the target element of the start event
				var target = startEvent.target;
	
				// When a touch starts, bind a touch end handler exactly once,
				$self.one('touchend', function(endEvent) {
				// When the touch end event fires, check if the target of the
				// touch end is the same as the target of the start, and if
				// so, fire a click.
					if (target == endEvent.target) {
					$.event.simulate('tap', self, endEvent);
					}
				});
			});
		}
	};
	
	
//Button functions.
//Author: 	Chris Moth
//Date:		27/07/2015

	//Move the menu and load the counter.
	$("#pvpbutton").on("tap click", function() {
		$("#pvpwrap").load("pvpcontent.html");
		$("#pvpwrap").css("z-index", 5);
		$("#menuwrap").css("z-index", 0);
	
	});
	
	//Move the menu and load the output from map.pl.
	$("#mapbutton").on("tap click", function() {
		//Some function calling the array from map.pl and print it to screen.
		$.get("map.pl", function(data, status){
			$("#pvpwrap").load(data);
		});
		$("#pvpwrap").css("z-index", 5);
		$("#menuwrap").css("z-index", 0);
		
	});
	
	//Empty the counter content and return to the menu.
	$("#pvpwrap").on("tap click", "#exitbutton", function() {
		$("#pvpwrap").empty();
		$("#pvpwrap").css("z-index", 0);
		$("#menuwrap").css("z-index", 5);
	
	});

});