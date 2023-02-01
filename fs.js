//sistema de archivos
//modulo que contiene funcionalidad muy util para trabajar con el sistema de archivos

//operaciones utiles
//leer, modificar, copiar, eliminar, cambiar nombre

//todos los metodo de este modulo son asicronos por defecto 
//_Sync sincrono 
//fs.rename()asincrono
//fs.renameSync()sincrono lo convierto en sincrono ya q por defecto viene asincrono

const fs = require('fs');
fs.readFile('index.html', 'utf-8', (err, contenido)=> {
    if (err) {
        console.log(err);
    }else{
        console.log(contenido);
    }
}); //leer archivo 