let productos = [
    {id: 1, nombre:"papas McCain", cantidad: 1, descrip: "papas McCain x2,5kg", Precio: 700, img: 'assets/papas.jpg'},
    {id: 2, nombre:"Hamburguesas Swift", cantidad: 1, descrip: "Hamburguesas Swift clasicas x 160gr", Precio: 500, img: 'assets/descarga.jpg'},
    {id: 3, nombre:"Patitas de pollo", cantidad: 1, descrip: "patitas de pollo x500gr", Precio: 800, img: 'assets/patitas.jpg'},
    {id: 4, nombre:"Caritas McCain", cantidad: 1, descrip: "Cartias McCain x 600gr", Precio: 600, img: 'assets/caritas.jpg'},
]

const boxProductos = document.getElementById('box-productos')
const boxCarrito = document.getElementById("mi-carrito")




let carrito =[]
productos.forEach((producto) => {
    const div = document.createElement('div') 
    div.classList.add('producto')
    div.innerHTML = `
    <img src="${producto.img}" alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.descrip}</p>
    <p class="precioProducto">Precio$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">agregar</button>
    `
    boxProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod) =>prod.id === prodId)
    carrito.push(item)
    renovarCarrito()
    console.log(carrito)
}


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => producto.id ===prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    renovarCarrito()

}


const renovarCarrito = () => {
    boxCarrito.innerHTML = ""
    carrito.forEach((prod) =>{
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>${prod.precio}</p>
        <p>cantidad: <spanid ="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito${prod.id}" class="boton-eliminar">ELIMINAR</button>
        `
        boxCarrito.appendChild(div)
    })
}

