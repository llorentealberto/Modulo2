let listaCarrito = [];
let prenda1 = () => {
    objectPrenda1 = {
    nombre: "Pantalón suelto gris",
    precio: 20
    }
    listaCarrito.push(objectPrenda1);
}
let prenda2 = () => {
    objectPrenda2 = {
    nombre: "Vestido túnico",
    precio: 18
    }
    listaCarrito.push(objectPrenda2);
}
let prenda3 = () => {
    objectPrenda3 = {
    nombre: "Falda mid print",
    precio: 12
    }
    listaCarrito.push(objectPrenda3);
}
let prenda4 = () => {
    objectPrecio4 = {
    nombre: "Cardigan largo rayas",
    precio: 22
    }
    listaCarrito.push(objectPrecio4);
}
let prenda5 = () => {
    objectPrenda5 = {
    nombre: "Mini falda cebra",
    precio: 19
    }
    listaCarrito.push(objectPrenda5);
}
let prenda6 = () => {
    objectPrenda6 = {
    nombre: "Mono beige",
    precio: 20
    }
    listaCarrito.push(objectPrenda6);
}
let prenda7 = () => {
    objectPrenda7 = {
    nombre: "Jersey vestido beige",
    precio: 30
    }
    listaCarrito.push(objectPrenda7);
}
let prenda8 = () => {
    objectPrenda8 = {
    nombre: "Pantalón ancho negro",
    precio: 35
    }
    listaCarrito.push(objectPrenda8);
}
let mostrarCarrito = () => {
    let arrayCaracteristicas = [];
    for(let i = 0; i < listaCarrito.length; i++) {
        let nombreObject = listaCarrito[i].nombre;
        let precioObject = listaCarrito[i].precio;
        let prenda = `Artículo: ${nombreObject}.\nPrecio: ${precioObject}€`;
        arrayCaracteristicas.push(prenda);
    }
    let resultElement = document.getElementById("text-total");
    arrayCaracteristicas.forEach((caracteristicas) => {
        let parrafo = document.createElement("p");
        parrafo.textContent = caracteristicas;
        resultElement.appendChild(parrafo);
    });
    return arrayCaracteristicas;
  }
let precioTotal = () => {
    let arrayPrecios = [];
    for(let i = 0; i < listaCarrito.length; i++){
        let precios = listaCarrito[i].precio;
        arrayPrecios.push(precios);
    }
    let suma = 0;
    for(let i = 0; i < arrayPrecios.length; i++){
        suma += arrayPrecios[i];
    }
    let sumaTotal = document.getElementById("precioTotal-txt").innerHTML = `Precio total: ${suma}€`;
    return sumaTotal;
}
