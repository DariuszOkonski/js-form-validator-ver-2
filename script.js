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

function checkIsEmpty() {
    if(username.value === '') {
        showError(username, 'Username can not be empty');
    } else {
        showSuccess(username);
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
    window.location.reload(true);
})