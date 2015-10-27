$(document).ready(function(){
	

	$( "#Cats" ).on( "click", function() { // if you click cat button
		console.log("cat")
	var jsonUrl = 'http://www.reddit.com/r/aww/search.json?q=cat&restrict_sr=true' //use this data
	getJson(jsonUrl); //now grab that data
	});


	$( "#Puppy" ).on( "click", function() { // if you click dog button
		console.log("dog")
	var jsonUrl = 'http://www.reddit.com/r/aww/search.json?q=puppys&restrict_sr=true' //use this data
	getJson(jsonUrl); //now grab that data
	});

function getJson(jsonUrl){
	console.log(jsonUrl)
	$.ajax({ //request reddit data
			url: jsonUrl,
			method: 'GET',
			success: function (data) { //if you get the json data
				
				
				showPics(data) //run this fucntion and use the data recieved 
			}
		})
}



function showPics(data){
$.each(data.data.children, function(i,item){ // for data child in the json
	       //append and image thumbnail and link to full image
 	        $(".container").append('<div class="col-md-2"><a href="' + item.data.url + '" title="' + item.data.title + '" target="_blank"><img src="' + item.data.thumbnail + '"></a>"</div>');
 	    	// 6 images per row
 	    });
	    };


});



