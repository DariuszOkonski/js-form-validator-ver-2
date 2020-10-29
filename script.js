const domElements = {
    btnSubmit: document.getElementById('btn-submit'),
    btnBack: document.getElementById('btn-back'),
    cover: document.getElementById('cover'),
    username: document.getElementById('username'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    rePassword: document.getElementById('rePassword'),
    form: document.getElementById('form')
};

function showError(element, message) {
    const parent = element.parentNode;
    parent.classList = 'form-group error';
    
    const small = parent.querySelector('small');
    small.innerText = message;
}

domElements.form.addEventListener('click', (e) => {
    e.preventDefault();

    if(username.value === '') {
        showError(username, 'element can not be empty');
    } else {

    }
})