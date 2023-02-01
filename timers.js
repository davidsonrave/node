//temporizador 
//contiene funciones que ejecutan codigo luego de un cierto periodo de tiempo

// funciones utiles son: 

//setTimeout = para ejecutar codigo luego de un numero especifico de milisegundos (esperar el tiempo especifico) 1 segundo son 1000 milisendos
//setTimeout(function, retraso, arguments);

function mostrarTema(tema) {

    console.log(`estoy aprendiendo ${tema}`);
    
}


setTimeout(mostrarTema, 5000, 'node.js');


function sumar(a,b) {
    console.log(a + b)
}

setTimeout(sumar, 2000, 4,5)

//setImmediate para ejecutar codigo asincronico en al proxima interaccion del ciclo de eventos (lo mas pronto posible) se ejecuta despues del codigo sincronico
//setImmediate(function, argumeto1, argumento2)

function mostrar(tem) {
    console.log(`estoy aprendiendo ${tem}`);
}
console.log('Antes'); //codigo sincrono

setImmediate(mostrar, 'node.js');//asincrono

console.log('despues de setImmediate()');//sincrono

//setInterval para ejecutar codigo un numero infinito de veces con un retraso especifico de milisegundos
//setInterval(function, intervalo, arg1, arg2)

function mostrarT(temA) {
    console.log(`estoy aprendiendo ${temA}`);
}

setInterval(mostrarT, 1500, 'susana')