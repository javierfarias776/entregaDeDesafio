/*const personas = ["pepito", "pepita", "mariano", "camila", "ester", "oscar"];

const eliminar = (nombre) => {
  let index = personas.indexOf(nombre);

  if(index != -1){
    personas.splice(index, 1);

    console.log(personas);
  }
};

eliminar("mariano");*/

/*const productos = [
  { id: 1, nombre: "pantalon", precio: 1000 },
  { id: 2, nombre: "camisa", precio: 700 },
  { id: 3, nombre: "gorra", precio: 800 },
  { id: 4, nombre: "zapato", precio: 1750 },
];

let encontrado = false;
let nombre = prompt("Ingrese el nombre del producto");

for(const producto of productos){
  if(producto.nombre === nombre){
    encontrado = true;
  }
}

if(encontrado){
  alert("Producto disponible");
}else{
  alert("Producto no disponible");
}
*/
// const productos = [
//     { id: 1, nombre: "pantalon", precio: 1000 },
//     { id: 2, nombre: "camisa", precio: 700 },
//     { id: 3, nombre: "gorra", precio: 800 },
//     { id: 4, nombre: "zapato", precio: 1750 },
//   ];
  
//   const encontrar = (nombre) => {
//     let encontrado = false;
    
//     for(const producto of productos){
//       if(producto.nombre === nombre){
//         encontrado = true;
//       }
//     }
    
//     if(encontrado){
//       alert("Producto disponible");
//     }else{
//       alert("Producto no disponible");
//     }
//   };
  
//   let nombre = prompt("Ingrese el nombre del producto").toLowerCase();
//   encontrar(nombre);

/*funcion find()

let nombre = prompt("Ingrese el nombre del producto");
let encontrado = productos.find(producto => producto.nombre === nombre);

if(encontrado){
  let mensaje = `
    id: ${encontrado.id}
    nombre: ${encontrado.nombre}
    $${encontrado.precio}
  `;

  alert(mensaje);
}else{
  alert("Producto no encontrado");
}*/


/*funcion Filter()
const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 700 },
  { id: 3, nombre: "gorra", precio: 1500 },
  { id: 4, nombre: "pantalon", precio: 300 },
];

let precio = parseInt(prompt("Ingrese el precio mínimo"));
let filtrados = productos.filter(producto => producto.precio > precio);

filtrados.forEach(item => {
  let mensaje = `
    id: ${item.id}
    nombre: ${item.nombre}
    $${item.precio}
  `;

  alert(mensaje);
});
*/

/*
metodo Map()
const nombres = productos.map((item) => item.nombre);
console.log(nombres);

const precios = productos.map((item) => item.precio);
console.log(precios);

const productosActualizados = productos.map((item) => {
  return {
    id: item.id,
    nombre: item.nombre,
    precio: item.precio + item.precio * 0.21,
  };
});

console.log(productosActualizados);

*/



  
