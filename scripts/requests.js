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

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    	var outers = document.getElementsByClassName("posts");
    	outers.style.width = '1100px';
    	//outers.style.height = 'auto';
    	//document.getElementsByClassName("innerPosts").style.padding = '3% 0%';
    	//document.getElementsByClassName("postText").style.marginLeft = '0px';
    	//document.getElementsByClassName("blogImages").style.cssFloat = 'none';
	}

	document.getElementById("blogPosts").innerHTML = response;
	

	}
});
});
