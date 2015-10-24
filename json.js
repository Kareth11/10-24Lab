$(document).ready(function(){

	// function gridMaker (){
	// 	var counter = 0;
	// 	for (i=0; i < 6; i++) {
	// 		newElement = document.createElement('div');
	// 		newElement.setAttribute('class', "row");
	// 		$(".container").append(newElement);
	// 		for (j=0; j < 3; j++) {
	// 			counter++;
	// 			newCol = document.createElement('div');
	// 			newCol.setAttribute('class', "col-xs-4 col-md-4 image");
	// 			newElement.appendChild(newCol);
	// 		}
	// 	}
	
	// }
	// gridMaker();
$.getJSON("http://www.reddit.com/r/aww/.json?jsonp=?", function(data) {
	    $.each(data.data.children, function(i,item){
	        //$("<img/>").attr("src", item.data.url).appendTo(".container");
	        $(".container")append("<div class='col-md-4'><img src='"+  item.data.url +"'/></div>" )
	    });
	    });

var rows = 8;
var columns = 3;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'col-md-4'
});
    //add columns to the the temp row object
    // for (var i = 0; i < columns; i++) {
    //     $row.append($square.clone());

    // }
    // //clone the temp row object with the columns to the wrapper
    // for (var i = 0; i < rows; i++) {
    //     $(".container").append($row.clone());
    // }

});