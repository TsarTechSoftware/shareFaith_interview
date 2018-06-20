
// This is the variable that we will store the html code in
var response = '';
$(document).ready(function(){

// Here we use jquery to pull in some json data. This json data is
// in the format: photolink, header, and description. This JSON file
// is assumed to contain the three most recent blog posts in the order
// from most recent to least. This JSON would usually be in a database,
// but I wasn't able to set up a databse because I didn't have the time.
$.ajax({
	type: 'GET',
	url: 'data/articleData.json',
	dataType: 'json',
	success: function(data){
		console.log(data);
		articles = data;

	// This loops through and posts the three blog posts in a formatted order.
	// This allows the json file to be dynamically sized so if more blog posts
	// are added, this will still just take the 3 most recent.
	for(var i = 0; i<3; i++){
	response+='<div class=\"posts\">\n'+
	'<div class=\"text-secondary innerPosts\">\n' +
	'<img src=\"' + articles["articles"][i]["photo"] + '\" class=\"blogImages\">\n' +
	'<div class=\"postText\"><h5 class=\"text-primary\">' + articles["articles"][i]["header"] + 
	'</h5>\n' + articles["articles"][i]["description"] + '</div></div></div>';
	}
	// This is me showing off... At least, it looks cool.
	$("#blogPosts").hide(1000);
	document.getElementById("blogPosts").innerHTML = response;
	$("#blogPosts").fadeIn(2000);

	}
});
});


// This function doesn't work but I thought I would demonstrate how I would go about 
// submitting an email recipient to a database. I hadn't the time to setup a database.
function addRecipient(){

	// This gets the values of the name and email in the submission form
	var firName = document.getElementById("name").value;
	var eml = document.getElementById("email").value;

	// This is supposed to be a json object.
	var dict={
		firstName: firName,
		email: eml

	};

	// All this is housekeeping and sending to the address where the database is, if we had one.

	var address = new XMLHttpRequest();
	var url = 'localhost';

	address.onreadystatechange = function(){
		if(address.readyState == 4 && address.status == 200){
			alert(address.responseText);
		}
	}
	address.open('POST', url, true);

	address.setRequestHeader('content-type', 'application/json');
	address.send(JSON.stringify(dict));

}
