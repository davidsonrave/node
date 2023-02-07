//async await nos ayuda escribir codigo mas conciso 

function ordenarProducto(producto) {
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando: ${producto} de freeCodeCamp`)
        setTimeout(() => {
            if (producto === 'taza') {
                resolve('Ordenando una taza con el logo de freeCodeCamp...');
            }else{
                reject('Este producto no esta disponible actualmente');
            }
        }, 2000);

    });
}

function procesarPedido(respuesta) {//va tomar la respuesta como argumento es decir la funcion ordenarProducto no es necesario almancenarlo con ese nombre se le pondra respuesta
    return new Promise(resolve =>{//podemso omitir reject 
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`)//utilizar el valor de la respuesta en la promesa
        setTimeout(() => {
            resolve('Gracias por tu compra. Disfruta tu producto')
        }, 4000);

    });
    
}

//realizar procesos asincrono en un orden especifico 
// encadenar promesas chaining promises

/*ordenarProducto('taza')//primero se ejeecuta esa funcion asincrona cuando se complete la llamda a then se va ejecutar
    .then(respuesta =>{// y se va llamr a esta funcion
        console.log('respuesta recibida')//eeste codigo que es sincrono se va ejeecutar
        console.log(respuesta);
        return procesarPedido(respuesta);//luego de que se completo lo anterior se va a retornar procesar pedido y pasamos el argumento respuesta que es la segunda funcion a ejecutar
    })
    .then(respuestaProcesada=>{//luego de recibir esas respuesta procesada este es resultado de lvalor retornado por return procesarPedido(respuesta) asimismo de lvalor retornado resolve('Gracias por tu compra. Disfruta tu producto')
        console.log(respuestaProcesada);//vamos a mostrarla
    })
    .catch(err=>{//si ocurre un error en esos procesos
        console.log(err)
    }) */

// codigo equivalente al anterior con asyn await
async function realizarPedido(producto) {// async le va a decir a js que tien codigo asicnrono y asi por defecto retorna una promesa todo los async retornan promesas
    try{// define un bloque de código para ejecutar (para probar). try=intentar
        const respuesta = await ordenarProducto(producto) //awiat va esperar que ese proceso asincrno se complete antes de continuar la ejecuccion de la funcion sino lo podemos aparece (linea 61 a 65)
        console.log('Respuesta recibida');
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada)

    }catch(err){//define un bloque de código para manejar cualquier error.
        console.log(err)
    }
   
}

realizarPedido('taza');

// Ordenando: taza de freeCodeCamp
// Respuesta recibida
// Procesando respuesta...
// La respuesta fue: "[object Promise]"
// Promise { <pending> }