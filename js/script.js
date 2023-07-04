alert("¡Bienvenido a tu Pizzería Favorita!")

let carrito = "";
let nuevaOperacion = false;
let producto = prompt("¿Qué producto desea comprar? Tenemos:\n Muzzarella $3000 - Cod: M\n Napolitana $3200 - Cod: N\n Fugazzeta  $3400 - Cod: F\n Roquefort  $3600 - Cod: R\n Anchoas    $3800 - Cod: A");
let cantidad = Number(prompt(`¿Cuantas pizzas de "${producto}" quiere?`));
let valorM = 0;
let valorN = 0;
let valorF = 0;
let valorR = 0;
let valorA = 0;

function hacerCarrito (producto, cantidad) {
    do {
        seleccionarProducto(producto, cantidad)
        nuevaOperacion = confirm("¿Desea seguir comprando?")
        if (nuevaOperacion) {
            producto = prompt("¿Qué producto desea comprar? Tenemos:\n Muzzarella $3000 - Cod: M\n Napolitana $3200 - Cod: N\n Fugazzeta  $3400 - Cod: F\n Roquefort  $3600 - Cod: R\n Anchoas    $3800 - Cod: A");
            cantidad = Number(prompt(`¿Cuántas pizzas de "${producto}" quiere?`));
        }
    }while(nuevaOperacion)
    document.write("Pedido: <br><br>")
    document.write(`${carrito}<br>`)
    document.write(`Total $${valorM + valorN + valorF + valorR + valorA}`)
}
function seleccionarProducto (producto, cantidad) {
    switch (producto.toLowerCase()) {
        case "m":
            valorM = 3000 * cantidad;
            carrito += `Muzzarella $3000 x${cantidad} - Precio: $${valorM}<br>`
            break;
        case "n":
            valorN = 3200 * cantidad;
            carrito += `Napolitana $3200 x${cantidad} - Precio: $${valorN}<br>`           
            break;
        case "f":
            valorF = 3400 * cantidad;
            carrito += `Fugazzeta $3400 x${cantidad} - Precio: $${valorF}<br>`
            break;
        case "r":
            valorR = 3600 * cantidad;
            carrito += `Roqufort $3600 x${cantidad} - Precio: $${valorR}<br>`
            break;        
        case "a":
            valorA = 3800 * cantidad;
            carrito += `Anchoas $3800 x${cantidad} - Precio: $${valorA}<br>`
            break;
        default:
            alert("El producto seleccionado no esta disponible")
            break;                    
    }    
}
hacerCarrito(producto, cantidad)
alert("Gracias por tu pedido")