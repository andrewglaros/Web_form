$(document).ready(function() {

    // if javascript is enabled, display show password checkbox
    if ($('html').hasClass('js')){  // if javascript is enabled
        $('#show-password').removeAttr('style'),  // checkbox
        $('#checkbox-label').removeAttr('style');  // label
    }

    // if show password checkbox is checked, change the password field to input type="text"
    $('#show-password').click(function() {
        if ($(this).attr('checked')) {
            $('#password').replaceWith('<input id="password" name="password" type="text" value="' + $('#password').attr('value') + '" />');
        } else {
            $('#password').replaceWith('<input id="password" name="password" type="password" value="' + $('#password').attr('value') + '" />');
        }
    });

    // hide html card type radios and labels
	if ($('html').hasClass('js')){
		$('.card-type-label').addClass('hidden'), // labels
		$('.card-type').addClass('hidden'); // radios
	}

	//show card and security code images based on first digit of card number
	$('#card-number').keyup(function() {  
        if($(this).val() == 4){
            $('#card-type-container').addClass('visa'),
            $('#security-code-img').removeClass('hidden'),
            $('#visa').attr('checked', true);
        }  
        else if($(this).val() == 5){
            $('#card-type-container').addClass('mastercard'),
            $('#security-code-img').removeClass('hidden'),
            $('#mastercard').attr('checked', true);
        }  
        else if($(this).val() == 3){  
            $('#card-type-container').addClass('amex'),
            $('#security-code-img').removeClass('hidden'),
            $('#security-code-img').addClass('amex-img'),
            $('#amex').attr('checked', true);
        }  
        else if($(this).val() == 6){  
            $('#card-type-container').addClass('discover'),
            $('#security-code-img').removeClass('hidden'),
            $('#discover').attr('checked', true);
        }
        else if($(this).val() == ''){
            $('#card-type-container').removeClass('visa'),
            $('#card-type-container').removeClass('mastercard'), 
            $('#card-type-container').removeClass('amex'), 
            $('#card-type-container').removeClass('discover'),
            $('#security-code-img').addClass('hidden'),
            $('#security-code-img').removeClass('amex-img'),
            $('#visa').attr('checked', false),
            $('#mastercard').attr('checked', false),
            $('#amex').attr('checked', false),
            $('#discover').attr('checked', false);
        }
	}); // close function

    //say whether card is a valid number on blur
    //code goes here

}); // close document ready