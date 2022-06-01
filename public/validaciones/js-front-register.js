window.addEventListener("load", function () {
    let formulario = document.querySelector('form.user-form');
    let campoNombre = document.querySelector('');

    formulario.addEventListener('submit', function(e){

        let errores = [];


        

        if (campoNombre.value == ""){
            errores.push("El campo de nombre tiene que estar completo");
        } else if (campoNombre.value.lenght < 2) {
            errores.push("El campo de nombre debe tener al menos dos caracteres");
        }

        let campoApellido = document.querySelector('');

        if (campoApellido.value == ""){
            errores.push("El campo de apellido tiene que estar completo");
        } else if (campoApellido.value.lenght < 2) {
            errores.push("El campo de apellido debe tener al menos dos caracteres");
        }

        let campoUsername = document.querySelector('');

        if (campoUsername.value == ""){
            errores.push("El campo de usuario tiene que estar completo");
        } else if (campoUsername.value.lenght < 2) {
            errores.push("El campo de usuario debe tener al menos dos caracteres");
        }

        let campoEmail = document.querySelector('');

        if (campoEmail.value == ""){
            errores.push("El campo de email tiene que estar completo");
        }

        if (errores.length > 0) {
            e.preventDefault()

            let ulErrores = document.querySelector('div.errores ul')

            for (let i = 0; i < errores.length; i++) {

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
                
            }
        }

    })
})