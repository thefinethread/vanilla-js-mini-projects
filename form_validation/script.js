const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

inputs.forEach((input) =>
    input.addEventListener('keyup', (e) => {
        checkRequired(input);
        input.id === 'email' && checkValid(input);
        if (input.id === 'username') {
            checkLength(input, 3);
        } else if (input.type === 'password') {
            checkLength(input, 6);
        }
        input.id === 'password' && validatePassword(input);
        input.id === 'password2' && matchInputs(password, password2);
    })
);

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

checkRequired = (input) => {
    if (input.value === '') {
        showError(input, `${capitalizeInputName(input)} is required`);
    } else {
        showSuccess(input);
    }
};

checkLength = (input, length) => {
    if (input.value.trim().length < length) {
        showError(
            input,
            `${capitalizeInputName(
                input
            )} must have at least ${length} characters`
        );
    } else {
        showSuccess(input);
    }
};

checkValid = (input) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (String(input.value.trim()).toLowerCase().match(re)) {
        showSuccess(input);
    } else {
        showError(input, `Invalid ${capitalizeInputName(input)}`);
    }
};

validatePassword = (input) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (input.value.trim().match(re)) {
        showSuccess(input);
    } else {
        showError(
            input,
            `${capitalizeInputName(
                input
            )} length must at least 6 characters containing at least 1 number and 1 special character`
        );
    }
};

matchInputs = (input1, input2) => {
    if (input2.value === '' || input1.value.trim() !== input2.value.trim()) {
        showError(input2, `${capitalizeInputName(input2)} doesn't matches`);
    } else {
        showSuccess(input2);
    }
};

showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    formControl.querySelector('small').className = 'error';
    formControl.querySelector('small').innerText = message;
};

showSuccess = (input) => {
    input.parentElement.className = 'form-control success';
};

capitalizeInputName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
s;
