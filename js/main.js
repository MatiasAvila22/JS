const btn = document.getElementById('inicioSesion'),
checkbox = document.getElementById('checkbox'),
email = document.getElementById('email'),
 password = document.getElementById('password'),
cliente = document.getElementById('nombre')
btn.value = 'Registrar'
function guardar(valor) {
let usuario = {
username: email.value,
password: password.value,
 nombre: cliente.value,
}
if (valor === 'sessionStorage') {
    sessionStorage.setItem('usuario', JSON.stringify(usuario))
  }
  if (valor === 'localStorage') {
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }
  return usuario
}

function recuperarDatos(datos) {
  if (datos) {
    nombre.value = datos.nombre
    email.value = datos.username
    password.value = datos.password
  }
}

recuperarDatos(JSON.parse(localStorage.getItem('usuario')))

btn.addEventListener('click', (e) => {
  e.preventDefault()


  checkbox.checked ? guardar('localStorage') : guardar('sessionStorage')
})
let productos = [
    {id: 1, nombre:"papas McCain", cantidad: 1, descrip: "papas McCain x2,5kg", precio:700, img: 'assets/papas.jpg'},
    {id: 2, nombre:"Hamburguesas Swift", cantidad: 1, descrip: "Hamburguesas Swift clasicas x 160gr", precio:500, img: 'assets/descarga.jpg'},
    {id: 3, nombre:"Patitas de pollo", cantidad: 1, descrip: "patitas de pollo x500gr", precio:800, img: 'assets/patitas.jpg'},
    {id: 4, nombre:"Caritas McCain", cantidad: 1, descrip: "Cartias McCain x 600gr", precio:600, img: 'assets/caritas.jpg'},
]

const boxProductos = document.getElementById('box-productos')
const boxCarrito = document.getElementById("mi-carrito")




let carrito =[]
productos.forEach((producto)=> {
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
        <p>cantidad: <span id ="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito${prod.id}" class="boton-eliminar">ELIMINAR</button>
        `
        boxCarrito.appendChild(div)
    })
}


const crearHTML = (arr) => {
  let html;
  for (const item of arr) {
    const {id, producto, imagen} =item;

    html = `
    <div>
    <div>
    <img src="${imagen}">
    <span>${producto.toUpperCase()}</span>
    </div>
    </div>`;
    contenedor.innerHTML +=html;
  }
}

fetch('./js/data.json')
.then(res=>res.json())
.then(data=>{
  console.log(data)
  renderProducto(data)
})