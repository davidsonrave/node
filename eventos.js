//evento accion que se realiza en al aplicacion 
/*emmitters (emisores ) objetos que emiten eventos nombrados y llaman a funciones especificas cuando ocurren
son instancias de la clase EventEmitter eso  objetos tiene un metodo .on() para asociar una funcion al evento y esa funcion se denomina EventHandler (maneja el evento)*/

/*el moudlo events nos permite definir,emitir,escuchar para saber cuando ocurren*/ 

const EventEmitter = require('events'); //EventEmitter va representa una clase por eso inicia mayuscula

//console.log(EventEmitter);
/*<ref *1> [Function: EventEmitter] {
  once: [AsyncFunction: once],
  on: [Function: on],
  getEventListeners: [Function: getEventListeners],
  EventEmitter: [Circular *1],
  usingDomains: false,
  captureRejectionSymbol: Symbol(nodejs.rejection),
  captureRejections: [Getter/Setter],
  EventEmitterAsyncResource: [Getter],
  errorMonitor: Symbol(events.errorMonitor),
  defaultMaxListeners: [Getter/Setter],
  setMaxListeners: [Function (anonymous)],
  init: [Function (anonymous)],
  listenerCount: [Function (anonymous)] */

  const emisorProductos = new EventEmitter(); //instanciando la clase (nuevo objeto)

  emisorProductos.on('compra', (total, numProductos)=>{ // cuando ocurra una compra en nuestro evento on vamos a definir uan funcion para manejar ese evento (total, numProductos)=>son funciones eventHandlers son funciones que estan esperando que ocurra algo y cuando ocurra se ejecuta 
    console.log(`Total de al compra: $${total}`);
    console.log(`Numero de productos: $${numProductos}`)
  }); 

  emisorProductos.emit('compra', 500, 5 );//emitiar un evento llamando compra mira a que funcion esta asociado comprar ve la funcion y al ejecuta