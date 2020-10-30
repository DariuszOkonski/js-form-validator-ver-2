const domElements = {
    btnSubmit: document.getElementById('btn-submit'),
    btnBack: document.getElementById('btn-back'),
    cover: document.getElementById('cover'),
    username: document.getElementById('username'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    rePassword: document.getElementById('rePassword'),
    form: document.getElementById('form'),
    formGroups: document.querySelectorAll('.form-group')
};

const values = {
    min: 3,
    max: 15
}

function showError(element, message) {
    const parent = element.parentNode;
    parent.classList = 'form-group error';
    
    const small = parent.querySelector('small');
    small.innerText = message;

    domElements.allValid = false;
}

function showSuccess(element) {
    const parent = element.parentNode;
    parent.classList = 'form-group success';

    domElements.allValid = true;
}

function showWrongLength(element, length) {
    const parent = element.parentNode;
    parent.classList = 'form-group error';
    
    const message = length > values.min ? 'can not be more than ' : 'can not be less than ';

    const small = parent.querySelector('small');
    small.innerText = `${capitalizeFirstLetter(element.id)} ${message} ${length} characters`;

    domElements.allValid = false;
}

function checkEmailValidation() {
    console.log('email validation');
}

function capitalizeFirstLetter(element) {
    return element.slice(0,1).toUpperCase() + element.slice(1);
}

function checkIsEmpty() {
    
    if(username.value === '') {
        showError(username, 'Username can not be empty');
    } else {
        if(username.value.length < values.min) {
            showWrongLength(username, values.min)
        } else if(username.value.length > values.max) {
            showWrongLength(username, values.max)
        } else {
            showSuccess(username);
        }        
    }
    
    if(email.value === '') {
        showError(email, 'Email can not be empty');
    } else {
        showSuccess(email);
    }
    
    if(password.value === '') {
        showError(password, 'Password can not be empty');
    } else {
        showSuccess(password);
    }
    
    if(rePassword.value === '') {
        showError(rePassword, 'Re-password can not be empty');
    } else {
        showSuccess(rePassword);
    }
}

function checkIfAllValid() {
    // console.log(domElements.formGroups);
    let isValid = true;
    domElements.formGroups.forEach(element => {
        if(element.classList.contains('error')) {
            isValid = false;
            return;
        }
            
    });
    return isValid;
}

domElements.form.addEventListener('click', (e) => {
    e.preventDefault();

    checkIsEmpty();


    if(checkIfAllValid()) {
        setTimeout(() => {
            domElements.cover.classList = 'cover';            
        }, 1000);
    }
})

domElements.btnBack.addEventListener('click', () => {
    domElements.formGroups.forEach(element => {
        element.classList = 'form-group';
        
        const child = element.querySelector('input');
        child.value = '';
    })
    
    domElements.cover.classList = 'cover hide';

    // window.location.reload(true);
})