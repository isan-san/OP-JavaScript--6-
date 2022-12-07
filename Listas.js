let listaDeCompras = [
  "chocolate",
  "leche",
  "natilla",
  "canela",
  "harina",
  "carne",
];

let peliculasFavoritas = [
  {
    name: "mother",
    director: "Darren Aronofsky",
    yearOfRelese: new Date("september-15-2017"),
  },
  {
    name: "sing street",
    director: "John Carney",
    yearOfRelese: new Date("march-17-2016"),
  },
  {
    name: "el origen",
    director: "Christopher Nolan",
    yearOfRelese: new Date("august-06-2010"),
  },
];

listaDeCompras.push("Aceite de girasol");

console.log(listaDeCompras);

listaDeCompras.splice(listaDeCompras.indexOf("Aceite de girasol"), 1);

console.log(listaDeCompras);

listaDeCompras.pop();

console.log(listaDeCompras);
console.log(peliculasFavoritas.filter(pelicula => pelicula.yearOfRelese>"january-01-2011"));
console.log(peliculasFavoritas.map(pelicula => pelicula.director));
console.log(peliculasFavoritas.map(pelicula => pelicula.name));


// let pelisYComprasFP = [...listaDeCompras, ...peliculasFavoritas]
let pelisYComprasConcat = listaDeCompras.concat(peliculasFavoritas);

console.log(peliculasFavoritas);
console.log(pelisYCompras);

