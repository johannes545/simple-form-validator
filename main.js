const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// show input error
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//show success

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";

}

// Email validation

const validateEmail = (input) => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    };
};

//check Required

function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else if (false) {
            validateEmail(email)
        } else {
            showSuccess(input)
        }
    })
}

// check input length

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min}`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} can't accept anything over ${max} characters`)
    } else { showSuccess(input) }
}

// check password match

function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

// get fieldName

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1, input.length);
}

// event listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 5, 25);
    validateEmail(email);
    checkPasswordMatch(password, password2);
});