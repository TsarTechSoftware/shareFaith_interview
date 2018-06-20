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
var articles;
var response = '';
$.ajax({
	type: 'GET',
	url: 'data/articleData.json',
	dataType: 'json',
	success: function(data){
		console.log(data);
		articles = data;
	}
});
$(document).ready(function(){
for(var i = 0; i<3; i++){
	response+='<div><img src="' + articles["articles"][i]["photo"] + '"</div>\n' +
	'<div>' + articles["articles"][i]["header"] + '</div>\n' +
	'<div>' + articles["articles"][i]["description"] + '</div>\n' +
	'</div>';
}
document.getElementById("blogPosts").innerHTML = response;
});
