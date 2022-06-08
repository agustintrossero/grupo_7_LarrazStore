const expresiones = {
    price: /^[0-9]+$/,
    name: /^[a-zA-z]+$/
}

window.addEventListener('load', (e) => {
    let form = document.getElementById('form')

    let productName = document.getElementById('input-name')
    let productPrice = document.getElementById('input-price')
    let productDescription = document.getElementById('description')
    let productCheck = document.getElementById('product-check')
    let serviceCheck = document.getElementById('service-check')
    let productType = document.getElementById('product-type')
    let serviceType = document.getElementById('service-type')

    let errorDivProductName = document.getElementById('error-productName')
    let errorDivProductPrice = document.getElementById('error-productPrice')
    let errorDivProductDescription = document.getElementById('error-productDescription')
    let errorDivProductType = document.getElementById('error-productType')
    let submitError = 


    productName.addEventListener('keyup', (e) => {
        if (!expresiones.name.test(productName.value)) {
            errorDivProductName.innerHTML = '<p> Debes escribir un nombre sin numeros ni caracteres especiales </p>'
            errorDivProductName.classList.add('text-danger')
        }   else {
            if (errorDivProductName.classList.contains('text-danger')){
                errorDivProductName.classList.remove('text-danger')
            }
            errorDivProductName.innerHTML = ''
        }   
    })

    productPrice.addEventListener('keyup', (e) => {
        if (!expresiones.price.test(productPrice.value)) {
            errorDivProductPrice.innerHTML = '<p> Debes escribir un precio sin letras ni caracteres especiales </p>'
            errorDivProductPrice.classList.add('text-danger')
        }   else {
            if (errorDivProductPrice.classList.contains('text-danger')){
                errorDivProductPrice.classList.remove('text-danger')
            }
            errorDivProductPrice.innerHTML = ''
        }   
    })
    
    productCheck.addEventListener('click', (e) => {
        productType.classList.add("active")
        if(serviceType.classList.contains('active')) {
            serviceType.classList.remove('active')
        }
    })

    serviceCheck.addEventListener('click', (e) => {
        serviceType.classList.add("active")
        if(productType.classList.contains('active')) {
            productType.classList.remove('active')
        }
    })

    productType.addEventListener('change', (e) => {
        if(e.target.value == 'product') {
            errorDivProductType.innerHTML = '<p> Tienes que elegir una categoria de producto </p>'
            errorDivProductPrice.classList.add('text-danger')
        } else {
            if (errorDivProductType.classList.contains('text-danger')){
                errorDivProductType.classList.remove('text-danger')
            }
            errorDivProductType.innerHTML = ''
        }
    })

    serviceType.addEventListener('change', (e) => {
        if(e.target.value == 'service') {
            errorDivServiceType.innerHTML = '<p> Tienes que elegir una categoria de servicio </p>'
            errorDivServiceType.classList.add('text-danger')
        } else {
            if (errorDivServiceType.classList.contains('text-danger')){
                errorDivServiceType.classList.remove('text-danger')
            }
            errorDivServiceType.innerHTML = ''
        }
    })

    form.addEventListener('submit', (e) => {
        if(productDescription.value == '') {
            errorDivProductDescription.innerHTML = '<p> Debes escribir algo en la descripcion </p>'
            errorDivProductDescription.classList.add('text-danger')
        }   else {
            if (errorDivProductDescription.classList.contains('text-danger')){
                errorDivProductDescription.classList.remove('text-danger')
            }
            errorDivProductDescription.innerHTML = ''
        }   
        

        if (!expresiones.price.test(productPrice.value) 
            || productDescription.value == ''
            || !expresiones.name.test(productName.value) 
            || serviceType.value == 'service' 
            || productType.value == 'product' 
            || (!productCheck.checked && !serviceCheck.checked)) {
                e.preventDefault()
                submitError.innerHTML = 'campos imcompletos o invalidos'
            }
    })

})