let lowerCaseLetter = /[a-z]/g;
let number = /[0-9]/g;
let upperCaseLetter = /[A-Z]/g;
let specialSim = /[@#$%?]/g;

function error(element) {
    $(element).css("border-color", "#cd2d00");
    $("#register").attr('disabled', true);
}

function enable(element) {
    $(element).css("border-color", "#2eb82e");
    $("#register").attr('disabled', false);
}

function passwordValidator(password) {
    if (password.length < 8) {
        return "Password length should be longer!";
    }
    else if (!password.match(lowerCaseLetter)) {
        return "Password should contain at least one lower case letter";
    }
    else if (!password.match(upperCaseLetter)) {
        return "Password should contain at least one upper case letter";
    }
    else if (!password.match(number)) {
        return "Password should contain at least one number"
    }
    else if (!password.match(specialSim)) {
        return "Password should contain at least one special symbol ex.: @,#,$,%,?"
    }
    return "";
}

$(document).ready(function(){
    $("#Email").focusout(function() {
        if ($(this).val() === "") {
            error(this);
            $("#error_name").text("Email not be null");
        }  else {

            if ($(this).val().match("@")) {
                enable(this);
                $("#error_email").text("")
            }
            else {
                error(this);
                $("#error_email").text("Email must contain @ symbol");
            }
        }
    })

    $("#password").focusout(function() {
        if ($(this).val() === "") {
            error(this);
            $("#error_password").text("password not null!")
        }
        else {
            if (passwordValidator($(this).val()) === "") {
                enable(this);
                $("#error_password").text("");
            } else {
                error(this);
                $("#error_password").text(passwordValidator($(this).val()));
            }
        }
    })

    $("#retyped").focusout(function() {
        if ($(this).val() !== $("#password").val()) {
            error(this);
            $("#error_repeat").text("Password's not same!");
        } else {
            enable(this);
            $("#error_repeat").text("");
        }
    })
})
