/*
 * File: go.js
 * Description: Javascript for the Go page.
 */

/* Name: savFav
 * Description: Uses POST to save a routine as a favorite.
 * Parameters: None
 * Return None
 */
function saveFav() {
	// Get name and current url
	var name = prompt("Name this routine:");
	var queryString = location.href.split(location.host)[1];

	$('.fav-name').val(name);
	$('.fav-url').val(queryString);

    $.post('/save-fav', $('#fav-form').serialize(), function(data) {
   	});  
}

/*
 * Main function
 */
var main = function () {
	$('#fav-form-submit').click(function() {
		saveFav();
	});
/*
	var isGuest = $.getJSON('user.json', function(user) {
		console.log(user["guest"]);
		return user["guest"];

	});

	// If guest, load phone from session storage
	if (isGuest) {
		
		// Check that guest has entered a phone
		if (!sessionStorage.getItem("guestPhone"))
			window.location.href = "/";
		else
			$('.active-phone').html(sessionStorage.getItem("guestPhone"));
		
	}
	else {
		$('.active-phone').html("logged in");
	}
	*/
};
$(document).ready(main);