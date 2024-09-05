// Array de objetos
var productos = [
    { nombre: "Laptop", precio: 899.99 },
    { nombre: "Smartphone", precio: 499.99 },
    { nombre: "Tableta", precio: 299.99 },
    { nombre: "Auriculares", precio: 89.99 },
    { nombre: "Teclado", precio: 49.99 },
    { nombre: "Raton", precio: 29.99 },
    { nombre: "Monitor", precio: 199.99 },
    { nombre: "Impresora", precio: 129.99 },
    { nombre: "Altavoces", precio: 79.99 },
    { nombre: "Camara web", precio: 69.99 }
];


console.log(productos);

for (var i = 0; i < productos.length; i++) {

    let li = "<li>" + productos[i].nombre + ": " + productos[i].precio + "</li> ";
    document.getElementById("tablaProductos").innerHTML += li;
}

