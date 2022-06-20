
const expresiones = {
	username: /^[a-zA-Z0-9\_\-]{2,16}$/, 
	name: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
    surname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
	password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[.,:;-_!"§$%&/()=?`+@])[A-Za-z0-9]{8,16}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

Window.AddeventListener('load', (e) => {
    let form = document.getElementById('register')
    let submitError = document.getElementById('submit-error-register')
    let username = document.getElementById('username')
    let name = document.getElementById('name')
    let surname = document.getElementById('surname')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let confirmPassword= document.getElementById('passwordConfirm')
    let errorDivUsername = document.getElementById('front-register-username')
    let errorDivName = document.getElementById('front-register-name')
    let errorDivSurname = document.getElementById('front-register-surname')
    let errorDivEmail = document.getElementById('front-register-email')
    let errorDivPassword = document.getElementById('front-register-password')
    let errorDivConfirmPassword = document.getElementById('front-register-confirmPassword')

    username.addEventListener('keyup', (e) => {
        if (!expresiones.username.test(username.value)) {
            username.innerHTML = '<p> Debes escribir un usuario valido </p>'
            errorDivUsername.classList.add('text-danger')
        }   else {
            if (errorDivUsername.classList.contains('text-danger')){
                errorDivUsername.classList.remove('text-danger')
            }
            username.innerHTML = ''
        }   
    })
    

    name.addEventListener('keyup', (e) => {
        if (!expresiones.name.test(name.value)) {
            name.innerHTML = '<p> Debes escribir un nombre valido </p>'
            errorDivName.classList.add('text-danger')
        }   else {
            if (errorDivName.classList.contains('text-danger')){
                errorDivName.classList.remove('text-danger')
            }
            name.innerHTML = ''
        }   
    })
    surname.addEventListener('keyup', (e) => {
        if (!expresiones.surname.test(surname.value)) {
            surname.innerHTML = '<p> Debes escribir un apellido valido </p>'
            errorDivSurname.classList.add('text-danger')
        }   else {
            if (errorDivSurname.classList.contains('text-danger')){
                errorDivSurname.classList.remove('text-danger')
            }
            surname.innerHTML = ''
        }   
    })
    email.addEventListener('keyup', (e) => {
        if (!expresiones.email.test(email.value)) {
            email.innerHTML = '<p> Debes escribir un email valido </p>'
            errorDivEmail.classList.add('text-danger')
        }   else {
            if (errorDivEmail.classList.contains('text-danger')){
                errorDivEmail.classList.remove('text-danger')
            }
            email.innerHTML = ''
        }   
    })
    password.addEventListener('keyup', (e) => {
        if (!expresiones.password.test(password.value)) {
            password.innerHTML = '<p> Debes escribir una contraseña valida </p>'
            errorDivPassword.classList.add('text-danger')
        }   else {
            if (errorDivPassword.classList.contains('text-danger')){
                errorDivPassword.classList.remove('text-danger')
            }
            password.innerHTML = ''
        }   
    })
    confirmPassword.addEventListener('keyup', (e) => {
        if (password.value != confirmPassword.value) {
            confirmPassword.innerHTML = '<p>Las contraseñas no coincidden </p>'
            errorDivConfirmPassword.classList.add('text-danger')
        } else {
            if (errorDivConfirmPassword.classList.contains('text-danger')){
                errorDivConfirmPassword.classList.remove('text-danger')
            }
            confirmPassword.innerHTML = ''
        }   
    })
    form.addEventListener('submit', (e) => {
        if(!expresiones.username.test(username.value) || !expresiones.name.test(username.value) || !expresiones.surname.test(surname.value) || !expresiones.email.test(email.value) || !expresiones.password.test(password.value) || !expresiones.passwordConfirm.test(passwordConfirm.value)) {
            e.preventDefault() 
            submitError.innerHTML = 'campos imcompletos o invalidos'
        }
    })
})

