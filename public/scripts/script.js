document.getElementById('contact-form').onsubmit = function () {
    clearErrors();
    
    let isValid = true;

    // Validate First Name
    let firstName = document.getElementById('fname').value;
    if (firstName === "") {
        document.getElementById('err-fname').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('err-fname').style.display = 'none';
    }

    // Validate Last Name
    let lastName = document.getElementById('lname').value;
    if (lastName === "") {
        document.getElementById('err-lname').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('err-lname').style.display = 'none';
    }

    // Validate Email for Checkbox
    let email = document.getElementById('email').value;
    let checkBox = document.getElementById('mailing-list-checkbox');

    if (checkBox.checked && email === "") {
        document.getElementById('err-email').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('err-email').style.display = 'none';
    }

   

    // Email format validation
    let regexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email !== "" && !regexPattern.test(email)) {
        //Regex pattern for email validation found from link below. Includes how to use
        //test method for checking regex pattern within strings
        //https://www.w3resource.com/javascript/form/email-
        document.getElementById('err-email-format').style.display = 'inline';
        isValid = false;
    } else {
        document.getElementById('err-email-format').style.display = 'none';
    }

    // Validate LinkedIn
    let linkedIn = document.getElementById('LinkedIn').value;

    if (linkedIn === "") {
        document.getElementById('err-linkedIn').style.display = 'none';
    } else {
        //startsWith method documentation from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
        if (linkedIn.startsWith("https://linkedin.com/in/")) {
            document.getElementById('err-linkedIn').style.display = 'none';
        } else {
            document.getElementById('err-linkedIn').style.display = 'inline';
            isValid = false;
        }
    }



    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName('err');
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = 'none';
    }
}

let meetingSelect = document.getElementById('meeting-select');
let meetingOther = document.getElementById('other');

// Support for addEventListener from 
//https://www.tutorialspoint.com/why-addeventlistener-to-select-element-does-not-work-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
meetingSelect.addEventListener('change',  () =>{
    if (meetingSelect.value === "other") {
        meetingOther.style.display = 'inline';
    } else {
        meetingOther.style.display = 'none';
    }
});

let checkBox = document.getElementById('mailing-list-checkbox');
let emailFormat =  document.getElementById('email-format-section');
//Make email format appear and disappear
checkBox.addEventListener('change', () =>{
    if(checkBox.checked){
        emailFormat.style.display = 'inline';
    } else{
        emailFormat.style.display = 'none';
    }   
});


