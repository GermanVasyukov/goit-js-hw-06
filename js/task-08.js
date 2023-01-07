const refs = {
    form: document.querySelector('.login-form'),
    button: document.querySelector('button[type="submit"]')
}  
refs.form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
        } = event.currentTarget;
            if (email.value === "" || password.value === "") {
             alert("Заполните пожалуйста все поля!");
            }

const user = {};
    user.email = email.value;
    user.password = password.value;
    console.log(user);
    event.currentTarget.reset();
}

