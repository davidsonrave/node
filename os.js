//contiene funcionaldiad para obtener informacion ssobre el sistema operativo en el cual se ejecuta 
//la aplicacion


const os = require('os');

console.log(os.type()); //info del tipo sistema operativo = Windows_NT
console.log(os.homedir());//directorio ppal del os = C:\Users\david
console.log(os.uptime());//tiempo en q sea estado ejecutando el sistema = 1406539.546 en segundos es aleatorio
console.log(os.userInfo());//informacion sobre el usuario = {uid: -1,gid: -1,username: 'david',homedir: 'C:\\Users\\david',shell: null}
