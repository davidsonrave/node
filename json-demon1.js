// js a json

const infoCurso = {
    "titulo": "aprende node.js",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas" : [
        "javaScript",
        "node.js"
    ], 
    "esPublico": true
    
};

// console.log(typeof infoCurso)

// objeto -> cadena de caracteres 
//cadena de caracteres en formaton json
const infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);


//json a js
//cadena de caracteres -> objeto

const infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log( typeof infoCursoObjeto);
console.log(infoCursoObjeto.titulo);