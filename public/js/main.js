/*
 * main.js
 */


function goBack() {
	window.history.back();
}

function checkEmail(email) {
	// Check that user completed fields
	if (!email) {
		$('.email-warning').text("Must enter an e-mail address.");
		return false;
	}
	return true;
}

function checkPassword(password) {
	if (!password) {
		$('.password-warning').text("Must enter a password.");
		return false;
	}
	return true;
}

function checkPhone(phone) {
	if (!phone) {
		$('.phone-warning').text("Must enter a phone number.");
		return false;
	}
	return true;
}

function setup(className) {
	


	//var environment = $('.setup-input').val();
	
alert(className);
	//$('.' + environment).addClass('selected');

	$('.setup-form').submit();
	 

}

function login() {
	// Clear warnings
	$('.warning').text("");

	var email = document.getElementsByName("email")[0].value;
	var password = document.getElementsByName("password")[0].value;
	
	// Check inputed email and password
	var validEmail = checkEmail(email);
	var validPassword = checkPassword(password);

	// Return if one or more inputs are valid
	if (!validEmail || !validPassword)
		return;

	window.location.href = "/";
}

function logout() {
	if (confirm("Logout?")) 
		window.location.href = "/logout";
	else
		return;
}

function signup() {
	// Clear warnings
	$('.warning').text("");

	var email = document.getElementsByName("email")[0].value;
	var password = document.getElementsByName("password")[0].value;
	var phone = document.getElementsByName("phone")[0].value;

	
	// Check inputed email and password
	var validEmail = checkEmail(email);
	var validPassword = checkPassword(password);
	var validPhone = checkPhone(phone);


	// Return if one or more inputs are valid
	if (!validEmail || !validPassword || !validPhone)
		return;

	window.location.href = "/";
}

function favorite() {
	var name = prompt("Name for these settings:");

	var queryString = location.href.split(location.host)[1];
	//optionally removing the leading `/`
	//var queryString = location.href.split(location.host)[1].replace(/^\//,'');

	$('.favName').val(name);
	$('.favUrl').val(queryString);

	$('#fav-form').submit();
}

function loginWarning() {
	alert("You must be logged in to save favorites.");
}

var main = function () {	
	// Toggle stretch description
	$('.expand-stretch').click(function() {
		$(this).closest('.stretch').find('.stretch-desc').slideToggle(250);
		$(this).find('.chevron').toggleClass('glyphicon-chevron-down');
		$(this).find('.chevron').toggleClass('glyphicon-chevron-up');
	});

	$('#setup-page .stretch-info').click(function() {
		var stretch = $(this).closest('.stretch');
		stretch.toggleClass('selected');
		
		// If stretch is selected, set value to 1 (true)
		if (stretch.hasClass('selected')) {
			stretch.find('.stretch-checkbox').val("1")
		}
		// Otherwise, set to 0 (false)
		else {
			stretch.find('.stretch-checkbox').val("0")
		}
	});

	$('.confirm-stretches').click(function(e) {
		var empty = true;
		// Submit form if at least one stretch is selected
		$('.stretch-checkbox').each(function() {
			if ($(this).val() == "1") {
				empty = false;
			}
		});

		// Otherwise, show warning
		if (empty) {
			alert("You must select at least one stretch.");
			e.preventDefault();
		}

	}); 


	/* Timer */
	var Clock = {
		  totalSeconds: 0,

		  start: function () {
		  	
		    var self = this;
				function pad(val) { return val > 9 ? val : "0" + val; }
		    this.interval = setInterval(function () {
		      self.totalSeconds += 1;

		      
		      $("#min").text(pad(Math.floor(self.totalSeconds / 60 % 60)));
		      $("#sec").text(pad(parseInt(self.totalSeconds % 60)));
		    }, 1000);
		  },
		  
		  reset: function () {
		  	Clock.totalSeconds = null; 
		    clearInterval(this.interval);
		    $("#min").text("00");
		    $("#sec").text("00");
		  },
		  pause: function () {
		    clearInterval(this.interval);
		    delete this.interval;
		  },

		  resume: function () {
		    if (!this.interval) this.start();
		  },
		  
		  restart: function () {
		  	 this.reset();
		     Clock.start();
		  }
	};


	$('#startButton').click(function () { Clock.start(); });
	$('#pauseButton').click(function () { Clock.pause(); });
	$('#resumeButton').click(function () { Clock.resume(); });
	$('#resetButton').click(function () { Clock.reset(); });
	$('#restartButton').click(function () { Clock.restart(); });

	/* Favorite */

};

$(document).ready(main);