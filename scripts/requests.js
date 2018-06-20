var articleData = $.getJSON( "file:///Users/porta-cube/Desktop/dev/DeveloperNewHireProject/siteapp/data/articleData.json", function() {
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
  });
var articles = $.parseJSON(articleData);
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
}
document.getElementById("blogPosts").innerHTML = response;