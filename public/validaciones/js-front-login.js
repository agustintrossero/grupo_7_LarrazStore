const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{2,16}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
    apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, 
	password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,16}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

window.addEventListener('load', (e) =>{
    console.log('cargo el script')
    let form = document.querySelector('form.user-form')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let errorDivEmail = document.getElementById('front-errors-email')
    let errorDivPassword = document.getElementById('front-errors-password')
    let errorDivSubmit = document.getElementById('front-errors-submit')

    email.addEventListener('keyup', (e) =>{
        if (expresiones.email.test(email.value)) {
            errorDivEmail.innerHTML = '<p>tuki</p>'
            if (errorDivEmail.classList.contains('text-danger')) {
                errorDivEmail.classList.remove('text-danger')
                errorDivEmail.classList.add('text-success')
            }
        } else {
            errorDivEmail.innerHTML = '<p>Esto esta hecho para el orto</p>'
            if (errorDivEmail.classList.contains('text-success')) {
                errorDivEmail.classList.remove('text-success')
                errorDivEmail.classList.add('text-danger')
            }
        }
    })

    password.addEventListener('keyup', (e) =>{
        if (expresiones.password.test(password.value)) {
            errorDivPassword.innerHTML = '<p>tuki</p>'
            if (errorDivPassword.classList.contains('text-danger')) {
                errorDivPassword.classList.remove('text-danger')
                errorDivPassword.classList.add('text-success')
            }
        } else {
            errorDivPassword.innerHTML = '<p>Esto esta hecho para el orto</p>'
            if (errorDivPassword.classList.contains('text-success')) {
                errorDivPassword.classList.remove('text-success')
                errorDivPassword.classList.add('text-danger')
            }
        }
    })

    form.addEventListener('submit', (e) =>{
        if (!expresiones.email.test(email.value) || !expresiones.password.test(password.value)) {
            e.preventDefault()
            errorDivSubmit.innerHTML = 'Hay campos incorrectos'
        }     
    })
})