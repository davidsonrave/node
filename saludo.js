function saludar(nombre) {
    return `Hola ${nombre}`;
    
}

function saludarHolaMundo() {
    return 'Hola, Mundo';
}

//module.exports.saludar = saludar; //son independiente los saludar el ultimo es el nombre de la funcion el primero es como lo queremos llamar al exportar por lo  general lleva el mismo nombre de la funcion
//module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {//manera de exportar varias funciones
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
}