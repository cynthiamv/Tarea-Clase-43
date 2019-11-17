// EJERCICIO 1

const productos = ["Celular", "Cartera", "Taza", "Vaso", "Florero"];

let accion = prompt("¿Que acción queres realizar en tu carrito de compras(BORRAR/EDITAR/AGREGAR)?")



if (accion === "BORRAR") {

    // el usuario indica que producto quiere borrar, y lo eliminamos
    productoElegido = prompt("¿Que producto queres borrar?");
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] === productoElegido) {
            productos.splice(i, 1)
        }
    }
}
if (accion === "EDITAR") {
    // el usuario indica que producto quiere editar, y lo editamos
    productoElegido = prompt("¿Que producto queres editar?"); 
    for (let i = 0; i < productos.length; i++) {
        if (productos[i] === productoElegido) {
            productoAModificar = prompt("¿Por cuál producto queres modificarlo?")
            productos[i] = productoAModificar
        }

    }
}

if (accion === "AGREGAR") {
    // el usuario indica que producto quiere agregar, y lo agregamos
    productoElegido = prompt("¿Que producto queres agregar?"); 
    productos.push(productoElegido); 

}

console.log(productos);



