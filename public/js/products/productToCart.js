window.addEventListener('load', () => {
    let button = document.querySelector('.button-compra')
    let nombre = document.querySelector('h2')
    let precio = document.querySelector('h3')

    button.addEventListener('click', (e) => {
        

        const product = {
            nombre: nombre.innerText,
            precio: precio.innerText
        }
        
        localStorage.setItem ('cart', product)

        console.table(localStorage.cart)
    })
})