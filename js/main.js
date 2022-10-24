
const Clickbutton =document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener("click", addToCarritoItem)
})

function addToCarritoItem(e){
 const button = e.target
 const item = button.closest('.card')
 const itemTitle = item.querySelector('.card-title').textContent;
 const itemPrecio = item.querySelector('.precio').textContent;
 const itemImg = item.querySelector('.card-img-top').src;

 const newItem = {
  title: itemTitle,
  precio:itemPrecio,
  img: itemImg,
  cantidad: 1
 }

 addItemCarrito(newItem)
}

function addItemCarrito(newItem){

  const InputElemento = tbody.getElementByClassName('input__elemento')
  for(let i= 0; i < carrito.length; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemento[i]
      inputValue.value++;
     console.log(carrito)
     

      return null;
    }

  }


  carrito.push(newItem)
  renderCarrito()
}

function renderCarrito(){
  tbody.innerHTML =''
  carrito.map(item =>{
    const tr =document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    <th scope="row">1</th>
      <td class="table__productos">
          <img src="${item.img}">
          <h6 class="titulo_producto">${item.title}</h6>
      </td>
      <td class="table__precio"><p>${item.precio}</p></td>
      <td class="table__cantidad">
          <input type="number" min="1" value=${item.cantidad}>
          <button class="delete btn btn-danget">x</button>
      </td>
    `

    tr.innerHTML = Content;
    tbody.append(tr)
  })

}
