
//cuadno iniamos una operacion asincrona no sabemos cuando va a terminar ni como va a terminar no sabes el resultado ni el mensaje de error//

/* promise(promesa) objeto que se representa el eventual resultado(o error) de una operacion asincronica
una promesa es un objeto de js y ese objeto se asocia a una callback function (funcion de respuesta)
callback = funcion que se pasa a otra funcion como argumento y luego se ejecuta dentro de la funcion externa */

/* las promesas tiene un metodo .then() con el cual podemos decidir que ocurre cuadno se completa la promesa (exito o error)
.catch metodo de promesa que solo se ejecuta si la promesa es rechazada */


const promesaCumplida = true;
const miPromesa = new Promise((resolve, reject)=>{//tiene que saber como determianr si ese proceso fue exito o no psando una funcion como argumento y en esa funcion debe teenr como parametro resolve(resolver= exito ) y reject(rechazar = rechazada)
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('¡promesa cumplida!');//exito
        }else{
            reject('Promesa rechaza...');//rechazada
        }
    }, 3000);//retraso de 3s
});

//miPromesa.then((valor)=>{//manejar si la promesa fue exitosa (then=despues) vamos a pasar un valor a la funcion que la va manejar the solo se asocia si la funcion es exitosa. con reject no 
    //console.log(valor)
//});

// para manejar los dos argumento resolve y reject

const manejarPromesaCumplida = (valor) => { // resolve('¡promesa cumplida!') se pasa como arguemnto valor
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo)=>{// reject('Promesa rechaza...') se pasa como argumento razonRechazo 
console.log(razonRechazo)
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);