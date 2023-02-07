const estatuPedido = ()=>{
    //const estatus = Math.random() < 0.8;
    //console.log(estatus);
    //return estatus;
    return estatus = Math.random() < 0.8;
};

// for (let i = 0; i < 10; i++) {
//     console.log(estatuPedido());
    
// }


const miPedidoDePizza = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        if (estatuPedido()) {
            resolve('¡Pedido exsitoso! su pizza esta en camino');
        }else{
            reject('ocurrio un error intenta de nuevo')
        }
    }, 3000);
});

const manejarPedido = (mesajeDeConfirmacion) =>{ //resolve('¡Pedido exsitoso! su pizza esta en camino'); (mesajeDeConfirmacion)
    console.log(mesajeDeConfirmacion)
}

const rechazarPedido = (mensajeDeError)=>{// reject('ocurrio un error intenta de nuevo') (mensajeDeError)
    console.log(mensajeDeError)
}

miPedidoDePizza.then(manejarPedido,rechazarPedido);

miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);



//codigo equivalente al anterior pero en menos linea de codigo

//method chaining (encadenamiento demetodo ) forma de excribir esos metodo en una secuencia 

miPedidoDePizza
    .then((mensajeDeConfirmacion)=>{//maneja el exito
        console.log(mensajeDeConfirmacion);
    })
    /*.then(null, (mensajeDeError)=>{//null por que no vamos a tener una funcion que maneje el exito
        console.log(mensajeDeError);
    });*/
/*.catch metodo de promesa que solo se ejecuta si la promesa es rechazada remplaza then(null, (mensajeDeError)*/
    .catch((mensajeDeError)=> {
        console.log(mensajeDeError);
    })

