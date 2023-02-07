//sistema de archivos
//modulo que contiene funcionalidad muy util para trabajar con el sistema de archivos

//operaciones utiles
//leer, modificar, copiar, eliminar, cambiar nombre

//todos los metodo de este modulo son asicronos por defecto 
//_Sync sincrono 
//fs.rename()asincrono
//fs.renameSync()sincrono lo convierto en sincrono ya q por defecto viene asincrono

const fs = require('fs');

console.log('antes de leer el archivo... ')//son sincronos

fs.readFile('index.html', 'utf-8', (err, contenido)=> { //leer archivo 
    if (err) {
        console.log(err);
        throw (err);// detener la ejecuccion del programa y demas errores del programa nos da exactamente la linea del error
    }else{
        console.log(contenido);
    }
    console.log('mensaje..')// este console error se muestra con el console err y con el throw como se detiene no se muestra
});

console.log('Despues de leer el archivo... ')//son sincronos

fs.rename('index.html', 'main.html',(err) => {//permite cambiar el nombre de un archivo 
    if (err) {
        throw err;
        
    }
    console.log('Nombre cambiado exitosamente');//con el throw no ha necesidad de poner else

});

console.log('Despues de cambiar el nombre... ')//son sincronos



fs.appendFile('main.html', '<p>Hola</p>', (err) => {//agregar contenido al final de un archivo.
    if(err){
        throw err;
    }

    console.log('archivo actualizado')

});

console.log('Despues de agregar contenido al archivo... ')//son sincronos

fs.writeFile('main.html', 'contenido Nuevo', (err)=>{//remplaza todo el contenido del archivo 
    if (err) {
        throw err;
    }
    console.log('archivo remplazado exitosamente ')
});

console.log('Despues de remplazar el contenido del archivo... ')//son sincronos


fs.unlink('main.html', (err)=>{//eliminar un archivo 
    if (err) {
        throw err;
    }
    console.log('archivo eliminado');

});

console.log('Despues de eliminar el archivo... ')//son sincronos


/*los procesos asincronos se ejeuctan despues de los procesos sincronos
antes de leer el archivo... 
Despues de leer el archivo...
Despues de cambiar el nombre...
Despues de agregar contenido al archivo...
Despues de remplazar el contenido del archivo...
Despues de eliminar el archivo...
Nombre cambiado exitosamente
archivo eliminado
archivo actualizado
archivo remplazado exitosamente
contenido Nuevo
*/
