console.log('muchachos ya lo deje vinculado con el ejs de login, faltaria acomodar el back de login asi implemento estas magias en el front')

window.addEventListener('load', (e) =>{
    console.log('cargo el script')
    let form = document.querySelector('.user-form')
    let email = document.getElementById('email')
    let password = document.getElementById('password')

    email.addEventListener('change', (e) =>{
        console.log(e.value)

    })

    password.addEventListener('change', (e) =>{

    })

})