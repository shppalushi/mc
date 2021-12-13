$(`#registerEmail`).click(() => {
    $(`#registrationDiv`).fadeIn(1000);
})

function checkEmail(emailAddress) {
    var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
    var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
    var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
    var sQuotedPair = '\\x5c[\\x00-\\x7f]';
    var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
    var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
    var sDomain_ref = sAtom;
    var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
    var sWord = '(' + sAtom + '|' + sQuotedString + ')';
    var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
    var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
    var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
    var sValidEmail = '^' + sAddrSpec + '$'; // as whole string
  
    var reValidEmail = new RegExp(sValidEmail);
  
    return reValidEmail.test(emailAddress);
  }

$(`#early-access`).click(() => {
    var emailAddress = $(`#inputEmail`).val();
    var isValid = checkEmail(emailAddress);
    if(!isValid){
        $(`#errorEmail`).removeClass(`d-none`)
        return;
    }
    $(`#errorEmail`).addClass(`d-none`);
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'https://email-subscription-togorea.herokuapp.com/api/email/post',
        data: {
            "email": emailAddress,
            "extraInformation": "Register application"
        },
        success: function(result){
            toastr.success("Thank you for registering. We will get in touch soon!")
            $(`#registrationDiv`).fadeOut(1000);
        },
        error: function(result){
            toastr.error("Your data does not seem to be right, or is already registered, please try another time!")
        }
    })
})