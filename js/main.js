let nombreUsuario;
let producto1 = "PAPAS x 500gr";
let producto2 = "HAMBURGUESAS x24";
let producto3 = "PATITAS DE POLLO x kg" ;
let producto4 = "CARITAS x 250gr";
let precio1 = 500;
let precio2 = 2500;
let precio3 = 700;
let precio4 = 400;

do {
    nombreUsuario = prompt("Ingrese su nombre completo");
} while (nombreUsuario === "" || isNaN(nombreUsuario) === false );
alert("Bienvenido "+nombreUsuario);

const Productos = () =>{
    let seleccion = parseInt(prompt("Elegi un producto: \n1)"+producto1+" con un precio de $"+precio1+"\n2)"+producto2+" con un precio de $"+precio2+"\n3)"+producto3+" con un precio de $"+precio3+"\n4)"+producto4+" con un precio de $"+precio4));
    return seleccion;
} 
function Pago(){
    let formaPago;
    while(formaPago!=1 && formaPago!=2 && formaPago!=3 && formaPago!=4){
    formaPago = parseInt(prompt("De que forma desea pagar?\n1) Efectivo \n2) Débito \n3) 3 cuotas sin interés\n4) Transferencia"));
    }
    return formaPago;

}
let productoSeleccionado = Productos();
let seleccioarnPago = Pago();
const CalculoPago = (producto) =>{
    switch (producto) {
        case 1:
            switch (seleccionarPago) {
                case 1:
                    console.log(nombreUsuario+" deberás pagar $"+(precio1));
                    break;
                case 2:
                    alert(nombreUsuario+" deberás pagar $"+(precio1));
                    break;
                case 3:
                    alert(nombreUsuario+" deberás pagar 3 cuotas de: $"+(precio1));
                    break;
                case 4:
                    alert(nombreUsuario+" deberás transferir: $"+(precio1));
                    break;
            }
        case 2:
            switch (seleccionPago) {
                case 1:
                    alert(nombreUsuario+" deberás pagar $"+(precio2));
                    break;
                case 2:
                    alert(nombreUsuario+" deberás pagar $"+(precio2));
                    break;
                case 3:
                    alert(nombreUsuario+" deberás pagar 3 cuotas de: $"+(precio2));
                    break;
                case 4:
                    alert(nombreUsuario+" deberás transferir: $"+(precio2));
                    break;
            }
            case 3:
                switch (seleccionarPago) {
                    case 1:
                        alert(nomarbreUsuario+" deberás pagar $"+(precio3));
                        break;
                    case 2:
                        alert(nombreUsuario+" deberás pagar $"+(precio3));
                        break;
                    case 3:
                        alert(nombreUsuario+" deberás pagar 3 cuotas de: $"+(precio3));
                        break;
                    case 4:
                        alert(nombreUsuario+" deberás transferir: $"+(precio3));
                        break;
                }
                case 4:
                    switch (seleccionarPago) {
                        case 1:
                            alert(nombreUsuario+" deberás pagar $"+(precio4));
                            break;
                        case 2:
                            alert(nombreUsuario+" deberás pagar $"+(precio4));
                            break;
                        case 3:
                            alert(nombreUsuario+" deberás pagar 3 cuotas de: $"+(precio4));
                            break;
                        case 4:
                            alert(nombreUsuario+" deberás transferir: $"+(precio4));
                            break;
                    }                
    }
}

let comprarMas;
do{
    comprarMas = prompt("desea seguir comprando? \n S para continuar - N para finalizar").toLowerCase();
}while(comprarMas!="s" && comprarMas!="n");

if(comprarMas==="s"){

}
else if(comprarMas==="n"){
    alert("Acabas de finalizar tu compra");
    CalculoPago(productoSeleccionado);
}
