/*global bootstrap:true, Modernizr:true */

$( "button" ).click(function() {

	if($(this).attr('id') == 'red') {
		
		// red 

		var url = 'http://192.168.0.100/R';
	}
		

	if($(this).attr('id') == 'green') {
		
		var url = 'http://192.168.0.100/G';

	}


	// if($(this).attr('id') == 'yellow') {
		
	// 	var url = 'http://192.168.0.100/'

	// }


	if($(this).attr('id') == 'blue') {
		
		var url = 'http://192.168.0.100/B'

	}

	if($(this).attr('id') == 'address_btn') {
		
		var url = 'http://192.168.0.104:4567/address'
		$.post( url, {p: $("#p").val()} );

	}
	else {
		var colorReq = $.get(url, function() {
  			console.log( "success" );
		})
	
	  	.fail(function() {
	    	console.log( "error" );
	  	})
	  	.always(function() {
	    	console.log( "finished" );
	  	});
	}





});