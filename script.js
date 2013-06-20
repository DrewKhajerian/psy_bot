	// var url="http://192.168.0.105:8071/motion-control/update";
var url="127.0.0.1:8071/motion-control/update";

$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which, 10)) {
			case 65: //left 'a'
				$('img').animate({left: "-=50px"}, 5);
				//$.ajax({url, data: {strafe: -1}, datatype: "jsonp"});
				break;
			case 83: //down 's'
				$('img').animate({top: "+=50px"}, 5);
				// $.ajax({url, data: {forward: -1}, datatype: "jsonp"});
				break;
			case 87: //up 'w'
				$('img').animate({top: "-=50px"}, 5);
				// $.ajax({url data: {forward: 1}, datatype: "jsonp"});
				break;
			case 68: //right 'd'
				$('img').animate({left: "+=50px"}, 5);
				// $.ajax({url, data: {strafe: 1}, datatype: "jsonp"});
				break;
			default:
				break;
		}
	});
});
