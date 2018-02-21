/*
 * main.js
 */

function hideWelcome() {
	localStorage.setItem("hideWelcome", "true");
	$('#welcome').hide();
}

function goBack() {
	window.history.back();
}

function backToStretches() {
	if (confirm("Are you sure? The timer will reset.")) 
		goBack();
	else
		return;
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

/*
function setup(className) {
	


	//var environment = $('.setup-input').val();
	
alert(className);
	//$('.' + environment).addClass('selected');

	$('.setup-form').submit();
	 

}
*/

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
	if (confirm("Log out?")) 
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

function getPhone() {
	var phone = prompt("Ergo sends alerts through SMS. Where can we reach you?");
	if (phone) {
    	submit();
	}
	else
		return;
}

function sortStretches() {
	var stretches = $('.stretch-list>li');

	$.each(stretches, function() {
		if ($(this).hasClass('selected'))
			$(this).parent().prepend(this);
	});
}

function selectStretch(input) {
	var stretch = $(input).closest('.stretch');
	stretch.toggleClass('selected');
		
	// If stretch is selected, set value to 1 (true)
	if (stretch.hasClass('selected')) {
		stretch.find('.stretch-checkbox').val("1")
	}
	// Otherwise, set to 0 (false)
	else {
		stretch.find('.stretch-checkbox').val("0")
	}
}

/*
 * main
 */
var main = function () {
	// For development only
	//localStorage.clear();

	/* Highlight active menu item */
  	var url = window.location.href;
    $('.nav-link').filter(function() {
        return this.href == url;
    }).addClass('active'); 

    sortStretches();

	// Toggle stretch description
	$('.expand-stretch').click(function() {
		$(this).closest('.stretch').find('.stretch-desc').slideToggle(250);
		$(this).find('.chevron').toggleClass('oi-chevron-bottom');
		$(this).find('.chevron').toggleClass('oi-chevron-top');
	});

	// Toggle select stretch
	$('#setup-page .stretch-info').click(function() {
		selectStretch(this);
	});
	// Toggle select stretch
	$('#setup-page .stretch-image').click(function() {
		selectStretch(this);
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


	$('#startButton').click(function () {
		Clock.start(); 
		$(this).hide();
		$('#resumeButton').show();
		$('#pauseButton').show();
		$('#resetButton').show();
	});
	$('#pauseButton').click(function () { Clock.pause(); });
	$('#resumeButton').click(function () { Clock.resume(); });
	$('#resetButton').click(function () {
		Clock.reset(); 
		$(this).hide();
		$('#startButton').show();
		$('#pauseButton').hide();
		$('#resetButton').hide();
	});
	$('#restartButton').click(function () { Clock.restart(); });

	/* Favorite */

};

$(document).ready(main);