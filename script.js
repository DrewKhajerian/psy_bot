	// var url="http://192.168.0.105:8071/motion-control/update";
var url="127.0.0.1:8071/motion-control/update";

$(document).ready(function() {
		
    $(document).keydown(function(key) {
    	banana = "<img class='banana' src='http://i.stack.imgur.com/e8nZC.gif'><img class='banana' src='http://i.stack.imgur.com/e8nZC.gif'>";
    	$('img').remove('banana');
      switch(parseInt(key.which, 10)) {
			case 65: //strafe left 'a'
				$('img').animate({left: "-=50px"}, 5);
				//$.ajax({url: url, data: {strafe: -1}, datatype: "jsonp"});
				break;
			case 83: //down 's'
				$('img').animate({top: "+=50px"}, 5);
				// $.ajax({url: url, data: {forward: -1}, datatype: "jsonp"});
				break;
			case 87: //up 'w'
				$('img').animate({top: "-=50px"}, 5);
				// $.ajax({url: url, data: {forward: 1}, datatype: "jsonp"});
				break;
			case 68: //strafe right 'd'
				$('img').animate({left: "+=50px"}, 5);
				// $.ajax({url: url, data: {strafe: 1}, datatype: "jsonp"});
				break;
			case 69: //turn right 'e'
				// $('img').rotate(35);
				// $.ajax({url: url, data: {turn: 1}, datatype: "jsonp"});
				break
			case 81: //turn left 'q'
				// $('img').rotate(-35);
				// $.ajax({url: url, data: {turn: -1}, datatype: "jsonp"});
				break;
			case 32: //'space'
				$('body').append(banana);
				$('body').append(banana);
				$('body').append(banana);
				$('body').append(banana);
				$('body').append(banana);
			 	break;
			default:
				break;
		}
	});
});
