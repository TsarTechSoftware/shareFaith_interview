/*var articleData = $.getJSON( "file:///Users/porta-cube/Desktop/dev/DeveloperNewHireProject/siteapp/data/articleData.json", function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });*/
var articles = $.ajax({
	type: 'GET',
	url: 'data/articleData.json',
	dataType: 'json',
	success: function(data){
		console.log("Success");
	}
});
var response = "";
var counter = 0;
for(i in articles["articles"]){
	response+='<div><img src="' + i.photo + '">' +
	'<div>' + i.header + '</div>' +
	'<div>' + i.description + '</div>' +
	'</div>';
	counter += 1;
	if(counter == 2){
		break;
	}
}/*{"articles": [
		{
			"photo":"images/article1.jpg",
			"header":"The must-dos for church preperation",
			"description":"How to get 10 times more organized leading up to Sunday"
		},
		{
			"photo":"images/article2.jpg",
			"header":"Get to see the top 10 mistakes you're making",
			"description":"How technology is changing the church world! And how you are being left behind."
		},
		{
			"photo":"images/article3.jpg",
			"header":"Find out what other churches are doing",
			"description":"How to get your church to thrive in the middle of nowhere.... and more!"
		}
	]
}*/
document.getElementById("blogPosts").innerHTML = response;