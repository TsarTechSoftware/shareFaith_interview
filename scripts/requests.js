var response = '';
$(document).ready(function(){
$.ajax({
	type: 'GET',
	url: 'data/articleData.json',
	dataType: 'json',
	success: function(data){
		console.log(data);
		articles = data;
	for(var i = 0; i<3; i++){
	response+='<div class=\"posts\">\n'+
	'<div class=\"text-secondary innerPosts\">\n' +
	'<img src=\"' + articles["articles"][i]["photo"] + '\" class=\"blogImages\">\n' +
	'<div class=\"postText\"><h5 class=\"text-primary\">' + articles["articles"][i]["header"] + 
	'</h5>\n' + articles["articles"][i]["description"] + '</div></div></div>';
	}

	document.getElementById("blogPosts").innerHTML = response;

	$("#blogPosts").fadeIn(1000);

	}
});
});
