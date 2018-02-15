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

var main = function () {
	
	$('.why-phone').click(function() {
		$('.why-phone-a').slideToggle();
	});
};

$(document).ready(main);