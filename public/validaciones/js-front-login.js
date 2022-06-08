const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{2,16}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
	password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,16}$/, // tuvimos que sacar el tema de los caracteres especiales porque no habia caso de que nos lo tome.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

window.addEventListener('load', (e) =>{
    let form = document.querySelector('form.user-form')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let errorDivEmail = document.getElementById('front-errors-email')
    let errorDivPassword = document.getElementById('front-errors-password')
    let errorDivSubmit = document.getElementById('front-errors-submit')

    email.addEventListener('keyup', (e) =>{
        if (expresiones.email.test(email.value)) {
            if (errorDivEmail.classList.contains('text-danger')) {
                errorDivEmail.classList.remove('text-danger')
                errorDivEmail.innerHTML = ''
            }
        } else {
            errorDivEmail.innerHTML = '<p>Debes escribir un formato de email válido.</p>'
                errorDivEmail.classList.add('text-danger')
        }
    })

    password.addEventListener('keyup', (e) =>{
        if (expresiones.password.test(password.value)) {
            if (errorDivPassword.classList.contains('text-danger')) {
                errorDivPassword.classList.remove('text-danger')
                errorDivPassword.innerHTML = ''
            }
        } else {
            errorDivPassword.innerHTML = '<p>La contraseña debe incluir letras mayúsculas, minúsculas, como mínimo un número y un cáracter especial.</p>'
                errorDivPassword.classList.add('text-danger')
        }
    })

    form.addEventListener('submit', (e) =>{
        if (!expresiones.email.test(email.value) || !expresiones.password.test(password.value)) {
            e.preventDefault()
            errorDivSubmit.innerHTML = 'Hay campos incorrectos'
        }     
    })
})