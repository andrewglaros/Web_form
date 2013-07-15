$().ready(function() {

	// validate on keyup and submit
	$("#form").validate({
		rules: {
			portfolioTitle: {
				required: true,
				minlength: 2
			},
			portfolioAddress: {
				required: true,
				minlength: 2
			},
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 5
			},
			cardNumber: {
				required: true,
				creditcard: true
			},
			cardType: {
				required: true
			},
			securityCode : {
				required: true,
				maxlength: 4,
				minlength: 3
			}
		},
		messages: {
			portfolioTitle: {
				required: "What dat portfolio title?",
				minlength: "Too short, shorty! Gimme at least 2 characters!"
			},
			portfolioAddress: {
				required: "What dat portfolio address?",
				minlength: "Too short, shorty! Gimme at least 2 characters!"
			},
			name: {
				required: "Who you is?",
				minlength: "Too short, shorty! Gimme at least 2 characters!",
			},
			email: {
				required: "What dat email address?",
				email: "Dat ain't right...hook us up with a real email."
			},
			password: {
				password: "Lock it up!",
				minlength: "Too short, shorty! Gimme at least 5 characters!"
			},
			cardNumber: {
				required: "No dough, no go!",
				creditcard: ""
			},
			cardType: {
				required: "What kinda card yo got?",
			},
			securityCode: {
				required: "What dat security code?",
				maxlength: "Too many numbers!  4 at most!",
				minlength: "C'mon, gimme at least 3 numbers."
			},
		}
	});

});