// ECMAscript 6 - Cambios con gran actualizacion (2015)

// ECMA6 - Let - Const y Arrow Functions
var lastname = 'Alexis'     // Declarar y asignar una variable
lastname = 'Eduardo'        // Reasignar una variable
console.log(lastname);

let fruit = 'Apple';
fruit = 'Kiwi'              // let tambien permite reasignar
console.log(fruit);

const animal = "Dog";
animal = "Cat";             // const no permite reasignar 
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "Apple"    // Function scope - Se puede acceder de manera global
        let fruit2 = 'Kiwi'     // Function block - Se Accede dentro del bloque donde fue declarada
        const fruit3 = 'Banana' // Function block 
    }
    console.log(fruit1);        // Puede acceder
    console.log(fruit2);        // No puede acceder desde fuera del bloque deonde se declaro
    console.log(fruit3);        // No puede acceder desde fuera del bloque deonde se declaro
} 
fruits();

// ECMA6 - Arrow Functions, Funciones de tipo flecha o funciones flecha
// Alternativa a una funcion con una forma mas amigable de trabajar y una sintaxis mas entendible

function square (num) {     // Forma con la funcion normal
    return num * num;
}

const square = (num) => {   // Se puede utilizar let var const, pero al ser una funcion se recomienda const
    return num * num;
}

const square = num => num * num; // Con solo un argumento podemos dejar de lado los parentesis, las llaves y el return. 

// ECMA6 - Strings
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!'
console.log(epicPhrase);

// ECMA6 - Template Literals
let epicPhrase2 = `${hello} ${world}!`; // Concatenar strings de manera mas practica y menos codigo
console.log(epicPhrase2);

// ECMA6 - Multi-line strings
let lorem = 'Esto es un string \n' + 'Esto es otra linea';
let lorem2 = `Esto es una frase epica   
Esta es otra frase epica.`;     // Hacer saltos de linea de manera mas sencilla
console.log(lorem);
console.log(lorem2);

// Parametros por defecto.  Valores que tomaran nuestras funciones en caso de no pasarle ninguno
function newUser (name, age, country) {
    var name = name || 'Alexis';    // Se utiliza condicional 'or' para ponerle parametro por defecto
    var age = age || 23;
    var country = country || 'VE';

    console.log(name, age, country);
}
newUser();
newUser('Azul', 18, 'AR');

function newAdmin (name = 'Alexis', age = 23, country = 'VE') { // Menos codigo y mas amigable
    console.log(name, age, country);
}
newAdmin();
newAdmin('Azul', 18, 'AR');

// ECMA6 -  Asignacion de Destructuracion
// Arrays Destructuring
let fruits2 = ['Apple', 'Banana'];
let [f1,f2] = fruits2;                 // De esta manera podemos destruscutar elementos (sacar a 'a y b' del array) y usarlos.
console.log(f1,f2);
console.log(fruits2[1],fruits2[2]);   // Manera de acceder a elementos de forma tradicional

// Object Destructuring
let user = {username: 'Alexis', age: 23};
let {username, age} = user;         // Destructuracion
console.log(username, age);
console.log(user.username, user.age);   // Manera tradicional

// ECMA6 - Spread Operator
let person = {name:'Alexis', edad:23}   
let country = 'VE'

let data = {id: 1, ...person, country}  // '...' Permite asignar todos los valores de un elemento lista a uno nuevo sin tanto codigo 
console.log(data);

let colors = ['Yellow', 'Green']
let newColor = 'Red'
let newColors = [...colors, newColor]   // Tambien funciona con Arrays
console.log(newColors);

// Rest
function sum (num, ...values) {     // Utilizando '...' como parametro de funcion pasa todos los segundos parametros dentro de values
    console.log(values);            // Mostrandonos un array con esos valores dentro
    console.log(num + values[0]);
    return(num + values[0]);
}

sum(1, 1, 2, 3);

// Promesa -  Forma de trabajar el asincronismo.
function anotherFunction () {   // Las Promesas devuelven valores dependiendo si fue 'Aceptada o Rechazada' el cual se accede mas adelante con '.them o .catch' respectivamente.
    return new Promise ((resolve, reject) => {  // Dependiendo cual se haya ejecutado es la que devolvera la funcion a travez del 'return'
        if (true) {
            resolve('Yai!');    // Si es 'Aceptada'y se cumple, se almacena algun valor en 'resolve' y sera lo que devuelva 'return'
        } else {
            reject('Nou');  // Si es 'Rechazada' y no de cumple, se almacena algun valor en 'reject' y sera lo que devuelva 'return'
        }
    })
}

anotherFunction()       // .them y .catch son Metodos que pertenecen al objeto Promise y nos muestra el estado de la Promesa.
    .them(response => console.log(response))    // Nos muestra el estado de la promesa cuando fue 'Acepada' y devuelta por el resolve
    .them(response => console.log(response))    // Podemos crear los them que queramos y para diferentes resultados que nos de la funcion 
    .catch(err => console.log(err))             // Nos muestra el estado de la promesa cuando fue 'Rechazada' y devuelta por el reject
    .finally(() => console.log('Finaly'));      // Permite tener una funcion anonima para hacer algo cuando la promesa haya terminado.

// Clases - Plantillas para crear objetos con mismos atibutos y metodos pero que contengan distintos valores.
class userList { };   // Declarando una clase 
const user22 = new userList();  // Instancia de una clase. Instancia = Accion de crear un nuevo objeto basado en una clase en particular

class User {
    // Constructor = Metodo especial para crear e inicializar un objeto que fue creado a partir de una clase
    // This = Hace referencia al elemento padre que lo contiene. Al objeto con el que se esta trabajando
    constructor(name, age) {    // El constructor generalmente recibe los parametros que seran aplicados a cada objeto usando this
        console.log('Nuevo Usuario'); // Cuando se cree una instancia se va a ejecutar/inicializar los elementos dentro del contructor
        this.name = name;   // Los Parametros traidos por el constructor se aplican con .this al objeto creadon en ese momento
        this.age = age;
    }
    // Metodos = Funciones (acciones) de un objeto. Permiten modificar y manipulas sus elementos. (Elementos posteriormente agregados)
    speak() {
        return 'Hello';
    }
    greating() {
        return `${this.speak} ${this.name}!`
    }
    // Setters y Getters
    get uAge() {    // 'Get' Permite acceder a leer al atributo de un objeto
        return this.age;
    }
    set uAge(n) {   // 'Set' Permite acceder y modificar el atributo de un objeto
        this.age = n;
    }
}
const alexis7 = new User ();    // 'new' Crea una instancia de la clase 'user'. Se crea el objeto 'alexis7' a travez de la clase 'User' 
console.log(alexis7.greating());    // Accedemos al metodo 'greating' del objeto creado y se ejecuta el codigo dentro de dicha funcion

const bebeloper1 = new User ('Eduardo', 15);    // Creamos otra instancia con parametros 'name, age' que se procesaran por constructor
console.log(bebeloper1.uAge);   // Accedemos al get que nos muestra el atributo
console.log(bebeloper1.uAge = 20);  // Al asignarle nuevo valor y modificarlo, accedemos al 'set' que permite hacer el cambio


// ECMA6 - Modulos: Manera de importar y acceder a la logica de un archivo para usarla en nuestro codigo.
// Este sera el modulo, que se encontrara en un archivo aparte de nuestra PC
const greating = () => {
    console.log('Hello');
}
export default hello;   // Con 'Export' permitimos que se accesa desde fuera a la funcion a travez del nombre 'hello'

// Este sera el codigo donde sera llamado el modulo
import {greating} from "./module.js" // 'import' para importar la logica llamando al nombre, con '{}' si es una funcion y con direccion
greating();     // Ya solo nos queda usar el codigo importado.
// Recordar agregar "type": "module" a 'package.json' para que nos permita trabajar con modulos y poner la extencion .js a la direccion


// ECMA6 - Generadores - Alternativa Iterador personalizado. Proceso que puede pausarce, reanudarse y producir varios valores.
function* iterate(array) {     // '*' Para especificar que esa funcion sera de tipo 'generator'
    for (let value of array) {
        yield value;    // 'yield' permite pausar una funcion generadora y muestra el valor que le sigue a yield
    }
}
// EL objeto generator mostrado por la funcion es un iterador, este tiene un metodo next() utilizado para iterar una secuencia de valores.
const it = iterate(['Gerald', 'Cirila', 'Sintra', 'Jaskier', 'Yennifer']); // El generator devolvera un objeto que se puede almacenar en una variable
console.log(it.next().value); // Invocando next en el generator y obtendremos el valor y el estado actual del iterador
console.log(it.next().value); // Al usar yield (que pausa la funcion en cada valor), el sigueinte next nos mostrara el valor sigueinte
console.log(it.next().value); // Asi con cada valor que devuelva la funcion hasta que llegue al ultimo

// ECMA6 - Set - Add
// Las Estructuras de datos predominantes son Objects y Arrays. ECMA 6 introdujo 2 nuevos tipos de objetos iterables: Map (ordenan por pares clave-valor, parecido a Object) y Set (lista valores unicos, parecido a Array)
const list = new Set(); // Indicamos que 'list' sera una lista 'Set'

list.add('Item 1')  // '.add' permite agregar items a la lista set
list.add('Item 2').add('Item 3')    // Se puede encadenar varios add
console.log(list);

// ECMA7 - Exponentials
const value = 3 ** 4;    // Nuevo operador para obtener una potencia entre dos valores
console.log(value);

//ECMA7 - Array Includes
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.includes(4));   // '.includes' nos permite saber si el array incluye un valor en especifico

let names = ['Oscar', 'David', 'Ana']
console.log(names.includes('oscar'));   // Tener en cuenta mayusculas en caso de strings porque toma como otro valir

// ECMA8 Object.entries - Transforma cada par 'clave-valor' del objeto en arreglos, de manera estructurada y mas legible
// ECMA8 Object.values - Tae de un objeto y transforma solo los valores en un arreglo (array).
const countries = {MX: 'Mexico', CO: 'Colombia', CH: 'Chile', PE: 'Peru'};
console.log(Object.entries(countries));
console.log(Object.values(countries));

//ECMA8 - String Padding - Agregar caracteres a un string si es necesario repitiendolos hasta llegar a la cantidad
const string = 'Hello';

console.log(string.padStart(7, '___')); // Inserta '___' al inicio hasta llegar a los carateres especificados '7'  
console.log(string.padEnd(7, '___'));   // Inserta '___' al final hasta llegar a los carateres especificados '7' 

//ECMA8 - Trailing commas - Es la capacidad de agregar items vacions a los arrays para futuras adiciones
const arra = [2, 4, 7, 8, , , 10];   // Incluso se puede dejar los items vacios y agregar uno al final

console.log(arra);
console.log(arra.length);

// ECMA8 - Funciones Asincronas - Permite aislar su flujo para que no intervenga en el externo. Logrando ejecutar varios procesos en simultaneo y que el codigo no se detenga se esta falla.
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)  // Forma de utilizar 'if' con el concepto terniario
            ? setTimeout(() => resolve ('AsynC!!'), 3000)   //  '?' Donde vamos a pasar la sentencia verdadera
            : reject(new Error('Error!'));  // ':' Hace referencia al 'else' donde pasaremos el codigo que se ejecutara si '?' no se cumple
    });
}

const anotherFn = async () => { // 'async' indica que una funcion siempre devolvera una promesa
    const some = await fnAsync();   // 'await' existe dentro de function 'async'. Hace JS esperar hasta que la funcion promesa responda para continual el codigo dentro de la funcion, Pero sin detener el flujo externo.
    console.log(some);  // Llama a 'fnAsync' y como tiene un 'setTimeout' sigue con el flujo hasta que el tiempo se cumpla
    console.log('Hello!');  // Se ejecuta despues que 'some' ya que esta dentro del flujo que queda pausado en segundo plano
}

console.log('Before');  // Se imprime en consola por flujo normal del codigo
anotherFn();    // Llama a la funcion que contiene el setTimeout por lo que no imprime nada hasta llegado el tiempo
console.log('After');   // Se imprime en consolas

// ECMA9 - Regex (RegularExpresions) - Son Patrones de busqueda y manipulacion de cadena de caracteres increiblemente potentes.
const regex = /(\d{4})-(\d{2})-(\d{2})/;    //\d{4} -> busca un string con exactamente 4 dígitos de longitud luego viene un guión
const matchers = regex.exec('2022-01-01'); // Por lo que la primera expresion de regex tomara "2022" por cumplir con las especificaciones.
console.table(matchers);

// ECMA9 - Spread - Sirve para crear un nuevo objeto a partir de otros.
const user1 = {username2: 'Aleclto7', age: 23, country: 'CO'}
const {username2, ...values } = user1;    // Al haber sacado 'username' toma '...' para los valores restantes y en este caso los guarda dentro de 'values' 
console.log(username);
console.log(values);

// ECMA9 - Async y Async en ciclo for
async function* anotherGenerator () {   // 'async' Indica que una funcion siempre devolvera una promesa
    yield await Promise.resolve(1); // 'await' Hace a JS parar hasta que la funcion promesa responda pero sin detener el flujo externo
    yield await Promise.resolve(2); // 'Yield' pausa la funcion y muestra el valor que le sigue 
    yield await Promise.resolve(3); // Se crea una promesa pero sin validacion, directmente que retorne un valor a travez del resolve
}
const other = anotherGenerator();
other.next().then(response => console.log(response.value))  // '.next' trae el valor del estado actual de la funcion en este caso
other.next().then(response => console.log(response.value))  // '.then' trae el valor que devuelve la promesa a travez del resolve
other.next().then(response => console.log(response.value))  // '.value' trae el valor del resolve, ya que originalmente viene un objeto
console.log('Hello');   // Se ejecuta primero ya que 'anotherGenerator' es una funcion asincrona, detiene el flujo dentro pero no el externo.

async function arrayOfNames (array) {   // La funcionalidad de iterar tambien fue agregada para los for
    for await (let value of array) {
        console.log(value);
    }
}
const names1 = arrayOfNames(['Alexis', 'Azul', 'Burbuja']);
console.log('After');

//ECMA10 - flat - Permite aplanar los elementos de un array, eliminando arrays internos.
const array = [1, 2, 3, 4, 5, [2, 3, 4, 5, [6, 7, 8]]];
console.log(array.flat(3));

//ECMA10 - flatMap - Permite aplanar los elementos de un array en un nivel, pasando una funcion que mapea cada elemento.
const arrayMap = [1, 2, 3, 4, 5];
console.log(arrayMap.flatMap(v => [v, v * 2]));

//ECMA10 - TrimStart - TrimEnd - Permite eliminas espacios en blanco al inicio y al final de algun string
const greating1 = '               Hello World       '
console.log(greating1.trimStart());  // Elimina espacios al inicio de un String 
console.log(greating1.trimEnd());    // Elimina espacios al final de un String








// ----------------------------------------------------------------------------------------------------------------------------------

// Tipos de datos 
// Primitivos:
"Alexis Calixto"                                    // String = Cadenas de texto. Debe ir entre comilla
true - false;                                       // Booleanos = Valor logico binario 
null                                                // Indica un valor nulo
undefined                                           // Indica un valor no definido


// No Primitivos o de objeto
[1, 2, 3]                                           // Tipo objeto / Con valores primitivos dentro
{nombre: 'Alexis'}                                  // Tipo objeto / 

typeof null                                         // Identificar el tipo de dato de un valor en JavaScript


// Variables - Representacion de un lugar en memoria que vamos a reservar para guardar algun valor.
var nombre = 'Alexis';                              // Variable - Espacio en memoria donde guardamos informacion.
var nombre;                                         // Forma mas antigua de crear variable. Da ciertos problemas por lo que se crearon nuevas
let result;                                         // Crear variables - Permite cambiar el valor de una variable en el futuro.
const nombre = valor;                               // Crear variables - No permite cambiar su valor en el futuro
let edad;                                           // Declarar una variable - Apartar el espacio en memoria sin nungun valor aun.
edad = 23;                                          // Inicializar una variable - Asignamos un valor a esa variable.

var elementos = ['Computadora', 'Celular'];         // Variable de Array
var persona = {                                     // Variable de Objeto
    nombre: 'Alexis',
    edad: 30
}

// Funciones - Sentencias que podemos utilizar para generar acciones con los valores de las variables
// Declarativas - Se declara directamente con la palabra reservada 'function'
function miFuncion() {                              // Tambien reserva espacio en memoria 'miFuncion' que guarda las operaciones de la funcion
    return (3)                                      // Devuelve algun resultado en las funciones
}

//Expresion - Se declara dentro de una variable alguna funcion anonima
var miFuncion = function (a, b) {                   // Los parametros (a, b) permiten que trabaje valores que agregemos al momento de invocar
    return (a + b);
}
miFuncion();                                        // Como se invocan las funciones, para que inicie los procesos que tiene dentro

// Funciones de tipo flecha / funciones flecha o Arrow Functions
// Alternativa a una funcion con una forma mas amigable de trabajar y una sintaxis mas entendible

function square (num) {     // Forma con la funcion normal
    return num * num;
}

const square = (num) => {   // Se puede utilizar let var const, pero al ser una funcion se recomienda const
    return num * num;
}

const square = num => num * num; // Con solo un argumento podemos dejar de lado los parentesis, las llaves y el return. 


// Operadores - Aritmeticos, Asignacion, Comparacion
var a = 1;                                          // '=' Asigna un valor a la variable
3 == '3';                                           // '==' Compara que los valores sean iguales
3 === '3';                                          // '===' Compara que los valores y los tipos de datos sean iguales
3 > 6;                                              // '>' Mayor que / >= Mayor o igual a
3 < 6;                                              // '<' Menor que / <= Menor o igual a 
a && b;                                             // '&&' Si ambos son iguales o alguno de los 2 es verdad
a || b ;                                            // '||' Si alguno de los 2 es verdadero
a ++;                                               // Icrementa 1 al valor de alguna variable 
a +=5;                                              // Incremente la cantidad que indiquemos al valor de la variable


// Condicionales - Reglas para validar si algo es verdadero o falzo y generar algun valor con su resultado
if (condicion) {                                    // Si la condicion () se es verdadera se ejeuta el codigo entre llaves {}
    console.log('Soy Verdadero')
} else if (condicion) {                             // 2da condicion, si la primera no es verdadera prueba con esta antes de el 'else'
    console.log('Soy falso')
}
else {                                              // Lo que se ejecuta por default si la condicion del 'if' no se cumple.
    console.log('Error')
}

condition ? true : false;                           // Operador Terniario - Explicado en siguiente ejemplo
var resultado = numero === 1 ? "Soy 1" : "No soy 1";// condicion es correcta se ejecuta lo que esta despues de '?', si es falsa el final

switch (condicion) {                                // Condicional que funciona por casos.
    case 1:                                         // Si el caso se cumple, se ejecuta el codio que esta dentro.
        console.log('se ejecuta el #1');            
        break;                                      
    case 2:                                         // Si el primer caso no se cumple se prosigue a validar los siguientes casos.
        console.log('se ejecuta el #2');
        break;                                      // Si este caso es true, el 'break' detiene el codigo ahi y no valida otros casos.
    case 3:                                         // La condicional pasa por cada caso hasta que uno sea valido o hasta llegar al default
        console.log('se ejecuta el #3');
    default:                                        // Codigo que se ejecuta cuando ningun caso fue validad. 
        console.log('no se ejecuta ninguno');
}


// Array - Forga de generar una estructura de datos que permita guardar ciertos valores
var frutas = ['Manzana', 'Platano', 'Cereza', 'Fresa'];
var longitud = frutas.length;                       // Para ver la longitud de el array
console.log(frutas[1]);                             // Acceder a el elementos 1 del array. Se enumeran desde el 0 por lo que el 1 es Platano
var masFrutas = frutas.push('Uvas');                // Agregar elementos al final del array
var ultimo = frutas.pop;                            // Elimina el ultimo elementos del Array
var nuevaLongitud = frutas.unshift('Durazno')       // Agregar un elementos al inicio del array
var borrarFruta = frutas.shift;                     // Elimina elemento al inicio del Array
var posicion = frutas.indexOf('Cereza');            // Devuelve la posicion en la que esta 'Cereza' dentro del array


// Loops - Forma que tenemos de hacer que una tarea se repita sin tener que hacerlo de manera manual
for (let i; i < 10; i++) {                          // Crea variable 'i'; coloca condicion; sumamos a 'i' para que bucle ocurra.
    console.log(i);                                 // Codigo que se ejecutara las veces que indique el forS
}

for (elemento of array) {                           // Variacion del For / Se utiliza para recorrer los valores dentro de un Array
    console.log(elemento);                          // Variable toma el valor del elemento del array en el loop que se encuentre.
}
for (elemento in array) {                           // Variacion del For / Devuelve el indice de un Array

}

while(estudiantes.length > 0) {                     // A diferencia de For / Este no se detiene mientras la condicion sea True.
    var estudiante = estudiantes.shift();           
    saludarEstudiantes(estudiantes);
}


// Objects - Estructura de datos que permite almacenar valores mediante una sintaxis {Propiedad : Valor}
var miAuto = {
    marca: "Toyota",                                // Propiedad - Valor
    modelo: "Corolla",                              // Se separa cada nueva propiedad por ','
    annio: 2020,
    detalle: function () {                          // Metodo (Funciones que podemos mandar a llamar dentro de objetos)
        console.log(`Auto ${this.modelo} ${this.annio}`); // 'this' hace referencia al objeto en que sea usado
    }
};
miAuto.marca;                                       // Acceder al valor de esa propiedad que tiene el objeto

let arr = Object.value(obj);                        // Propiedad de Objetos que permiten convertir los valores en un array

// Objects "Funcion Constructora" - Sirve para crear varios objetos a partir de nueva informacion sin necesidad de hacerlo manualmente.
function auto(marca, modelo, annio) {               // Funcion que tendra como parametro las propiedades que tendra cada objeto
    this.marca = marca;                             // Como 'this' hace referencia al objeto que se esta creando en ese momento
    this.modelo = modelo;                           // Todos los valores que pasemos por parametro en la funsion
    this.annio = annio;                             // Seran almacenados en las propiedades de ese objeto
}
var autoNuevo = new auto("Tesla", "Model 3", 2020)  // Especificar que se va a construir una nueva instancia, seguida la funcion y parametros


// Metodos de Arrays - Existen metodos de Array para recorrer, devolver valores o un array con nuevos resultados
var articulos = [                                   // Se puede crean un Array con objetos dentro
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];
// Filter - Filtra elementos especificos de un Array a travez de una funcion y los almacena en un nuevo array.
var aFiltrados = articulos.filter(function(articulo) {// Creamo la variable que se convertira en el nuevo array de los elementos filtrados
    return articulo.costo <= 500                    // La funcion retorna articulos con costo < o = a 500 que seran agregados al nuevo array
});
// Map - Mapea el array y trae todos los valores de la propiedad que estamos buscando Tambien almacena los elementos en un nuevo array
var nomArt = articulos.map(function(articulo){      // Tambien se crea una variable que almacenara el nuevo array con los resultados.
    return articulo.nombre                          // Retornara todos los nombres de los articulos que pasan por la funcion
})
// Find - Consiste en encontrar el primer elemento del array que cumpla con la condicion especificada, los demas no los verificara.
var findArt = articulos.find(function(articulo){    // Variable que alamcenara funcion y se convertira en nuevo array de resultados
    return articulo.nombre === "Laptop"             // En este caso find nos traera el articulo que cumpla con la condicion especificada
})
// ForEach - Filtra dicho Array sin modificarlo y retornara la informacion solicitada. Ejecuta la funcion una vez por cada elemento del array
articulos.forEach(function(articulo){               // No almacena ningun dato en nuevo Array, retorna informacion solicitada
    console.log(articulo.nombre);                   // Imprimira todos los valores de propiedad 'nombre' de articulos que pasen por la funcion
});
// Some - Consiste validar si es Verdadero o falso la condicion que colocamos. Tambien crea un nuevo Array donde almacena resultado
var artBar = articulos.some(function (articulo) {
    return articulo.costo <= 700;
});


function presentacion(name, lastname, nickname) {

    console.log("Mi nombre es "  + name + " " + lastname + ", pero prefiero que me digas " + nickname + ".");
    
    }

// ---------------------------------------------------------------------------------------------------------------------------------------
// Maneras de Leer HTML desde el JavaScript 
const h1 = document.querySelector('h1');            // Document - acceder al html. querySelector - Accede a el primero del selector que indiquemos 'h1'
const p = document.querySelectorAll('p');           // querySelectorAll -  Accede a todos los selectores existende del indicado 'p'
const parrafo = document.querySelector('.parrafito');// Con '.' al igual que en CSS accedemos a la etiqueta con esa 'class' 
const pid = document.querySelector('#pid');         // Con '#' al igual que en CSS accedemos a la etiqueta con ese 'ID' 
const imput = document.querySelector('imput');      // Tambien se puede acceder a estiquetas imput

console.log({                                       // Imprime valores y propiedades de lo ingresado en el log. Al igual que un objeto
    parrafo,                                        // Tambien muestra todos las propiedades para interactuar con esa variable
    pid,
    imput
});

// Maneras de Modificar HTML desde JavaScript
h1.innerHTML = 'Patito <br> Negro'                  // innerHTML - modifica HTML de etiqueta seleccionada. Puede modificar codigo tambien
h1.innerText = 'Patito negro'                       // innerText - modifica texto HTML en etiqueta seleccionada. Evita ingreo codigo malicioso
console.log(h1.getAttribute('class'));              // getAttribute - Accede a el atributo seleccionado de la etiqueta HTML
h1.getAttribute('class', 'red')                     // setAttribute - Modifica valor del atributo seleccionado. ('atributo', 'nuevo valor')
h1.classList.add('violeta')                         // classList.add - Agrega una nueva clase a esa etiqueta.
h1.classList.remove('violeta')                      // classList.remove - Elimina la clase con el nombre indicado.
h1.classList.toggle('violeta')                      // classList.toggle - Elimina o agrega la clase dependiendo de si existe o no.
h1.classList.contains('violeta')                    // classList.contains - Devuelve true - false dependiendo si existe la clase que indicamos
imput.value = '456'                                 // Con atributos de imputs se puede accedes directamente con '.' y nombre atributo

const img = document.createElement('img');          // createElement - Crear una nueva etiqueta en el HTML
img.setAttribute ('src', 'https://veterinariaelcountry.com/wp-content/uploads/2022/08/JUGUETE-VINILO-SAPITO.jpg')   // Creamos atributo src y agregamos link que tendra la img
pid.append(img);                                    // append - Agrega el elemento despues del contenido que tenia el contenedor

// Escuchandores de eventos 
boton.addEventListener('evento','btnOnClick');      // Se pasa como parametro el evento a escuchar (click, touch..) y la funcion que ejecutara
function sumarImputValues(event) {                  // Formulario manda parametro como argumento, podemos usar para evitar recarga de pagina
    event.preventDefault();                         // Evita recarga pagina en eventos submit de formulario. A travez del evento que recibe como argumento en function
}



alert("hola mundo")                                  // Dispara una alerta
let nombre                                           // Declarar una variable vacia o global que usaremos mas adelante
let etiqueta

nombre.prompt("cual es tu nombre?")                  // Alert con cajita para que el usuario ingrese informacion
.addEventListener(evento, funcion)                   // Escuchador de eventos
etiqueta.getElementById("id")                        // Trae una etiqueta HTML al JS por medio de su id, y poder darle codigo JS 
let id = document.createElement('p')                 // Crea un elemento HTML desde JS, despues se puede agregar con appendChild
id.innerHTMl='nuevo valor'                           // (Modifica) reemplaza la sintaxis HTML del elemento por una nueva
etiqueta.appendChild(id)                             // Insertar un hijo. Permite insertar un elemento creado en JS al HTML.
location.reload()                                    // location (ubicacion en la que estamos) y metodo reload (Recargar)
id.style.display = "none"                            // 'none' (ocultar seccion) y 'block' (mostrarla) 

`<img src = './Pydos.png' alt=${mokepon.nombre}/>`   // ${} Template Literario, Permite agregar codigo interactivo dentro de una cadena de texto
id.innerHTML += estructuraHTML                       // Suma el template literario dentro de la etiqueta del id en HTML. '+=' Suma y no remplaza

console.log(window.innerWidth)                       // Nos devuelve el ancho de la pantalla, con 'Height el Alto

//--------------------------------------------------------------------------------------------------------------------------------------------

// Array, Class, Object

let animales = []                                    // 'Array' Tipo de variable que puede almacenar diferentes valores de manera ordenada
const ATAQUES_AGUA = [                               // 'Array' Se pueden crear con valores o vacios e insertarle valores con 'push'
    {nombre: '💧' , id: 'boton-agua'},               // Los diferentes valores se separan por  "," 
    {nombre: '🔥' , id: 'boton-fuego'},
    {nombre: '🌱' , id: 'boton-planta'},
]
perro.ataques.push (...ATAQUES_AGUA)                 // (...ATA) Para pasar los valores dentro de la lista "ATAQUES_AGUA" y no la lista en si
gato.ataques.push (...ATAQUES_AGUA)                  // Como si se hubiera escrito cada unos de los valores por separado

class Animal {                                       // Las clases son un template (modelo) para poder constuir objetos
    constructor(nombre, edad, velocidad, posicion, foto) {  // Constructor donde colocamos atributos o propiedades que tendran los objetos 
        this.nombre = nombre                         // Es como variable interna de la clase que va a guardad un valos, que va dentro de que
        this.edad = edad
        this.ataques = []
        this.velocidad = velocidad
        this.posicion = posicion
        this.mapaFoto = new Image()                  // Creamos una variable que va a contener una imagen
        this.mapaFoto.src = foto                     // Agregamos la imagen a la variable 
    }
    caminar() {                                      // Metodos, funciones que tendran los objetos.
        this.velocidad
    }
    comer() { }                                        
}
let perro = new Animal ("Paco", 3, 1, 250, 20,)      /* Objetos */
let gato = new Animal ('Kity', 1, 2, 0, 5)           /* Entre parentesis sus propuedades */
animales.push(perro, gato)                           // Inyecta un valor en el arreglo donde la hayas invocado
/* El uso de las 3 (Array, Class, Objeto) Nos va a ayudar mucho con codigo mas complejo */ 

//-------------------------------------------------------------------------------------------------------------------------------------------

// Condicionales                                        Si la condicion (…) se cumple

if (jugador == 'piedra' && Enemigo == 'tijera') {    // Doble '==' significa comparacion, '=' significa asignacion // && Operador 'y' 
    alert ('GANASTE')                                // Se ejecuta el codigo dentro {…}
}
if (id.checked) {  }             // checked verifica si fue seleccionado // if automaticamente evalua a verdadero, no hace falta '== true'

switch (event.key) {                                 // Condicional. Si 'event.key' coincide con
    case 'ArrowUp' :                                 // El caso 1 'ArrowUp' : 
    mover('arriba')                                  // se ejecutara el codigo ingresado a ese caso.
    break;                                           // Switch para aquí si el caso es correcto
    case 'ArrowDown' :                               // Si el primer caso no coincide, va al siguiente
    mover('abajo')
    break;
}


    
//-------------------------------------------------------------------------------------------------------------------------------------------

// Canvas

const idMapa = getElementById('mapa')               // Traemos canvas a una variable, pero para poder dibujar
const lienzo = idMapa.getContext('2d')              // Almacenamos el canvas en una variable nueva llamando al contexto '2d'

lienzo.drawImage (                                  // Para cargar una imagen dentro del canvas (lienzo)
foto,                                               // Variable que contenga la imagen
x,                                                  // Posicion en X que tendra la imagen
y,                                                  // Posicion en Y que tendra la imagen
width,                                              // Ancho
height                                              // Alto
)
lienzo.clearRect(x, y, x, y)                        // Limpia el Canvas. Se le indica desde donde hasta donde
intervalo = setInterval(pintarPersonaje, 50)        // Llama a una funcion 'pintarPersonaje' contantemente en el lapso de tiempo que se le coloque
clearInterval(intervalo)                            // Hace que se detenga el ciclo de estarse ejecutando constantemente

//---------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones, Peticiones al Servidor

botones.querySelectionAll('BAtaque')                // Toma los elementos con mismo algo (id) y los almacena donde se invoco 'botones' 
botones.forEach((boton) => {                        // Itera pos los elementos de un Array y por cada uno ejecuta una funcion
    boton.addEventListener('click', (e) => {        // (e) Significa evento mismo, el evento que esta ocurriendo en ese momento (PointerEvent)
        if (e.target.textContent === "FUEGO") {     // En PointEvent aparece 'target.textContent' que indica el contenido de lo que se le dio click
            boton.disable = true                    // Desabilita el boton en HTML
        }
    })
})

function traer (sandwich, tienda) {                  // Pedazos de codigo que podemos utilizar multiples veces.
    Math.random                                      // Devuelve numero aleatorio entre 0 (sin ser 0) y 1 (sin ser 1)
    Math.floor                                       // Quita decimales 
}

function unirse () {
    fetch('http://192.168.31.15:8080/unirse')        // 'fetch(URL)' Hace un peticion (por defecto 'get') por medio de HTTP. Colocar URL servidor
    .then(function (res) {                           // '.then' recibe los datos de respuesta, como parametro el callback (res)
        if(res.ok) {                                 // Verifica si todo salio bien en la peticion
            res.text()                               // Indicar lo que esperamos del fetch, en este caso seria 'text' texto.
            .then(function (respuesta) {             // De nuevo .then pero esta vez con la respuesta legible y utilizable
                console.log(respuesta)
            })
        }
    })
}

function obtenerAtaques () {
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`) // Al ser "Get" no hay identificarlo, lo toma por defecto. no "method" no "headers".
    .then(function (res) {
    })
}

` /mokepon/${jugadorId}/posicion `                      // `` Template String (lo que va dentro es strign) - ${} permite poner variable dentro string
fetch ('http://unirse', {clave:valor, nombre:'Diana'})  // Objeto JSON ('clave' cualquier nombre variable valido - 'valor' cualquier dato valido)

function enviarPosicion (x, y) {
    /* "fetch" hace una petición a la URL que se le especifique (Servidor). */
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {  // Llaves porque es un objeto JSON
    method: "post",                                     // Tipo de peticion. Por defecto toma Get, hay que especificar "post"
    headers: {                                          // Cabecera de la peticion, (metadatos o informacion para que computadore interprete)
        "Content-Type":"application/json"               // Indicar que se enviara un JSON
    },
    body: JSON.stringify({                              // Cuerpo de la peticion (Datos a enviar al servidor) - 'stringify' (convertir JSON a string)
        x: x,                                           // En caso de que usemos lo mismo en clave y en valor
        y                                               // Podemos abreviar asi y JavaScript lo reconoce
    })
})
    .then(function (res) {                              // Recibe la respuesta del Servidor 
        if(res.ok) {                                    // Verifica si todo salio bien en la peticion, si es correcto ->
            res.json()                                  // Indicar que esperamos JSON del fetch, para poder leer sus datos
            .then(function ({ enemigos }) {             // Sintaxis ( {enemigos} ) extrae especificamente esa variable de la respuesta
                enemigos.map(function (enemigo) { })    // Igual a 'forEach' pero retorna un valor cada vez generando una nueva lista con el mismo numero de elementos que la original
                return mokeponEnemigo                   // Devuelve un resultado en las funciones. Tambien detiene la ejecicion, cuando se encuentra con un return, frenara ahi y no se ejecutara lo que esta debejo de la funcion.
            })
        }
    })
}




//---------------------------------------------------------------------------------------------------------------------------------------------------


//SERVIDOR
//Para trabajar con una libreria, debemos descargarla con NPM y almacenarla en una variable
const express = require('express')                      // 'require' nos permite trabajar con las librerias que descargamos con NPM
const app = express()                                   // Creamos una aplicacion app representara nuestro servidor, invocamos express como funcion

app.use(express.json())                                 // Indicar a expres que soporte los post que traigan contenido en formato JSON
app.use(express.static('public'))           // Permite en la URL de nuestro servidor servir archivos estaticos. Dentro la carpeta donde se almacenan

app.get("//unirse", (res, req) => {                     // Para devolver Peticion especificar 'get o post', declaramos 'URL' a la cual va a devolver
res.setHeathers("Access-Control-Allow-Origin", "*")     // Cabecera indica de donde permitir peticiones hacia nuestro servidor / '*' habilita todos
res.send('hola')                                        // Dentro de 'Array function' la respuesta = 'res' respuesta y 'send' enviar. 
})

app.post("//mokepon/:jugadorId",  (req, res)=> {        // EndPoint de una API                     
                                                        //Lo que hara con los datos recibidos 
    const jugadorId = req.params.jugadorId || ""        // Extraer el parametro "jugadorId" del "req" (peticion)
    const x = req.body.x || ""                          // Extraer el valor "x" del "body" (cuerpo) del "req" (peticion) que hizo el cliente

    .findIndex((jugador) => jugadorId == jugador.id) // Buscar en lista elemento cumpla condicion, si existe devuelve su # lista, si no devuelve '-1'
    .filter((jugador) => jugadorId !== jugador.id)      // Ejecuta un filtro sobre las listas. ejecuta como funcion con lo que le pasemos.
    .find((jugador) => jugador.id == jugadorId)         //

    res.send({                                          // Envia datos en la respuesta de la peticion 
        enemigo                                         // Devuelve JSON, que es lo que permite express
    })                                   

    res.end()                                           // res.end() devuelve un dato vacio
}) 

app.listen(8080, ()=> {                                 // Para que escuche peticiones, '8080' es el puerto por el que va a escuchar 
    console.log('Servidor FUncionando')
})