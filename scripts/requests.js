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
	response+='<div><img src="' + articles["articles"][i]["photo"] + '"</div>\n' +
	'<div>' + articles["articles"][i]["header"] + '</div>\n' +
	'<div>' + articles["articles"][i]["description"] + '</div>\n' +
	'</div>';
	}
	document.getElementById("blogPosts").innerHTML = response;

	}
});
});
