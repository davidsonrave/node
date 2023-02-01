//const saludo = require ("./saludo.js");//estamos requiriendo un modulo
const {saludar, saludarHolaMundo} = require ("./saludo.js");//con destructuracion podemos importar

//console.log(saludo)

//console.log(saludo.saludar("mundo"));

//console.log(saludo.saludarHolaMundo());
console.log(saludar("susana"));//con la destructuracion podemos ejecutar asi el codigo
console.log(saludarHolaMundo());