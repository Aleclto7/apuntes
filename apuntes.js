// ECMA6 (2015) - Let - Const y Arrow Functions
// var lastname;            // Se veria de esta manera la forma en que JS declara las var.
var lastname = 'Alexis'     // JS al usar var, declara la variable al comienzo de todo.
lastname = 'Eduardo'        // var permite reasignar una variable. Se puede acceder de Manera global

let fruit = 'Apple';        // Declarar y asignar una variable
fruit = 'Kiwi'              // let tambien permite reasignar. Se Accede dentro del bloque donde fue declarada

const animal = "Dog";       // 
animal = "Cat";             // const no permite reasignar. Se Accede dentro del bloque donde fue declarada


//Funciones (Que se DECLARAN con la palabra reservada de Function) Tambien son Clases en JS (Clases basadas en Prototipos)
function Fn () {                
//  {prop: 'propiedad'}        // Asi seria el objeto literal que crea 'new' donde se almacenaran las propiedades que asigenmos con 'this'
    this.prop = 'propiedad';    // Las Funciones en JS tiene un contexto de 'this'
    return 'Hola Mundo';        // Al haber llamado a la funcion con 'New' el return es ignorado.
    return  this;               // Por lo que en realidad en el fondo retorna de manera implicita el 'this'
}
const r = new Fn()              // Usar New antes de llamar a una funcion, crea una INSTANCIA 'objeto literal' de esta misma.
console.log(r);                 // Este objeto literal empieza a guardar todas las propiedades que se le asignen a travez de 'this'
// INSTANCIA: Acción de crear un nuevo objeto basado en una clase particular.


//! ECMA6 - Arrow Functions, Funciones de tipo flecha o funciones flecha
// Alternativa a una funcion con una forma mas amigable de trabajar y una sintaxis mas entendible

function square (num) {     // Forma con la funcion normal
    return num * num;
}
const square = (num) => {   // Se puede utilizar let var const, pero al ser una funcion se recomienda const
    return num * num;
}
const square = num => num * num; // Con solo un argumento podemos dejar de lado los parentesis, las llaves y el return. 


console.log(this);
const fatFn = () => { // Las Fat arrow function no tienen contexto de this! El this que utiliza es el del scope global
    this.prop = 'lala'
}
const r1 = fatFn()
console.log(this);

const fnR = () => 2         // Al omitir las llaves la arrown function hace un return implicito.
console.log(fnR());         // Dando como resultao el '2'


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

//! Clases - Plantillas para crear objetos con mismos atibutos y metodos pero que contengan distintos valores.
class userList { };   // Declarando una clase 
const user22 = new userList();  // Instancia de una clase. Instancia = Accion de crear un nuevo objeto basado en una clase en particular

class User {
    // Constructor = Metodo especial para crear e inicializar un objeto que fue creado a partir de una clase
    // This = Hace referencia al elemento padre que lo contiene. Al objeto con el que se esta trabajando. A la instancia actial
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
    #private() {    // ECMA 12 - Metodos Privados - '#' Permite que los metodos solo puedan ser accedidos desde la misma clase
        return 'Este es un metodo privado'
    }
    // Setters y Getters
    get uAge() {    // 'Get' Permite acceder a leer al atributo de un objeto
        return this.age;
    }
    set uAge(n) {   // 'Set' Permite acceder y modificar el atributo de un objeto
        this.age = n;
    }
}
const alexis7 = new User ('Alexs, 23');    // 'new' Crea una instancia de la clase 'user'. Se crea el objeto 'alexis7' a travez de la clase 'User' 
console.log(alexis7.greating());    // Accedemos al metodo 'greating' del objeto creado y se ejecuta el codigo dentro de dicha funcion

const bebeloper1 = new User ('Eduardo', 15);    // Creamos otra instancia con parametros 'name, age' que se procesaran por constructor
console.log(bebeloper1.uAge);   // Accedemos al get que nos muestra el atributo
console.log(bebeloper1.uAge = 20);  // Al asignarle nuevo valor y modificarlo, accedemos al 'set' que permite hacer el cambio



const rectangulo = class R { }      // "Expresion de clase" Es cuando se esta definiendo una clase y esta se esta asignando a una constante.
// const rectangulo = class { }     // Las Expresion de clase tambien pueden ser "Anonimas"
class Rectangulo { }                // "Declaracion de clase" / Clases declaradas con Class no tienen hoisting a diferencia de function

class chancho {
    estado = 'feliz'                // Propiedades de la clase.           
    #hambre = false                 // 'Propiedad privada' - Puede ser utilizada pero al momento de imprimir una calse no sera mostrada
    static estatico = 42            // 'Propiedades estaticas' - pueden ser usadas sin haber instanciado alguna clase

    constructor(color = 'rosa', hambre = false) {// Se ejecuta al instanciar una clase / "parametro defecto" que toma si no le es asignado
        this.#hambre = hambre
        console.log(`soy ${color}`);
    }
    hablar() {                      // Metodo - 
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho'}`); //'this' hace referencia a la instancia de la clase / El . es para acceder a sus propiedades
    }
    static comer() {                // Metodo Estatico - Metodo que solo se accede desde la clase, no necesita crear otra intancia de clase
        console.log(this.propiedad, 'Estoy comiendo!'); // No puede acceder a las propiedades ya que estas pertenecen a las instancias
        console.log(this.estatico); // Solo podemos acceder a las propiedades declaradas con la palabra 'static'
    }
}
chancho.comer()                     // Podemos accedemos a los metodos estaticos sin la necesidad de generar intancias.
const nose = new chancho()          // Toda clase declarada con 'New' ejecutara el Constructor
nose.hablar()                       // Ejecutando el metodo de
const verde = new chancho('verde')  // 'verde' sera lo que se enviara al contructor que es lo primero que se ejecuta al declarar con 'new'
verde.hablar()
const amarillo = new chancho('amarillo', true)
amarillo.hablar()
console.log(nose);


// MODULOS
// ECMA6 - Modulos: Manera de importar y acceder a la logica de un archivo para usarla en nuestro codigo.
// Este sera el modulo, que se encontrara en un archivo './modulo.js' en otro lado de nuestra PC 
const chanchosFelices = ['chancho1', 'chancho2', 'chancho3']
export const chTristes = ['triste1', 'triste2']   // 'export' al inicio permite que pueda ser importado llamandolo entre llaves '{}'
export const otrosCh = []

const fn1 = () => {                               // Tambien podemos exportar funciones
    console.log('Soy la funcion 1');
}

export {chTristes, otrosCh, fn1}// Tambien se puede exportar en conjunto despues de ser declaradas.
export default chanchosFelices; // 'Export default' es a lo que se accede por defecto cuando sea importado el modulo.


// Este sera el codigo (en otro archivo) donde sera llamado el modulo
// Fuera de llaves lo que fue exportado por defecto. Entre llaves {chTristes} invocamos el array que tiene el export cuando se declaro. 
import chanchosFelices, {chTristes, otrosCh, fn1} from "./module.mjs"
console.log(chanchosFelices, chTristes, otrosCh);
fn1()
// Si tenemos un package.json y especificamos el uso de modulos, no hace falta que pongamos la extension .mjs al la direccion del 'from'




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

//! ECMA9 - Spread - Sirve para concantenar Arrays y tambien puede crear un nuevo objeto a partir de otros.
const fn = (a, b, c) => console.log(a + b + c)
const arr = [1,2,3]
// fn (arr[0], arr[1], arr[3])      Esta seria la forma de pasar cada uno de los argumentos del array como parametro de la funcion.
fn (...arr)                         // El spread operator mapea los elementos del array y los asigna a cada parametro de la funcion

const arr1 = [5,6]
// const arr2 = arr.concat(arr1)    Forma de concatener varios arrays
const arr2 = [...arr, ...arr1]      // El spread toma una copia de los valores de los arreglos, asignandolos a cada seccion 'concatenandolos'
console.log(arr2);

const obj1 = {a:1, b:2}
const obj2 = {b:5, c:'chanchito feliz'}
const obj3 = {...obj1}              // El spread en objetos nos permite crear una copia del objeto indicado y anadirla al nuevo
obj1.a = 10                         // Si modificamos el valor de 'a' del obj1 este no modificara donde se haya usado el spread

console.log(obj3, obj1);            // Vemos que el unico modificado es el obj1 ya que el obj3 tiene la copia del obj1 anterior
const obj4 = {...obj1, ...obj2}     // Al concatenamos objetos con mismas propiedades, los de la derecha remplazaran a las de la izquierda. 
console.log(obj4);                  // Las propiedades que quedan son el a del obj1, el b es remplazado el obj2 y el c del obj2

const obj5 = {                      // Uso real que se le puede llegar a dar
    ...obj1,
    loading: true,
    data: {
        promp: 'lala',
        animal: 'perrito'
    }
}

//! Rest Operator - Misma sintaxis que el Spread Operator pero con uso diferente
const rest = (a, b,  ...argumentos) => {/* los demas parametros despues de la 'a', se convertiran en un Array. Solo se usa de ultimo */
    console.log(a, argumentos);
}
rest (1, 2, 3, 4, 5, 6)             // Devoldere 1 y 2 como parametro a y b. 3, 4 y 5 como el Array de argumentos.

const obj = {
    a: 1, b: 2, c: 3, d: 4
}
const {a, b, ...restobj} = obj      //! Obejec destructing = Permite solicitarle al objeto que propiedades queremos obtener de el
console.log(a, b, restobj);         // El rest operator tambien puede servir para valores de objetos.      

const arre = [1, 2, 3 , 4, 5]       // Tambien se puede hacer Destructurin con Arreglos
// const [a, b, ...re] = arre
// console.log(a,b,re);

const useStates = () => ['valor', () => {}] // Tambien podemos devolver funciones y hacer destructuring de funciones
const [valor, setValor] = useStates ()
console.log(valor, setValor);





const user1 = {username2: 'Aleclto7', age: 23, country: 'CO'}
const {username2, ...values } = user1;    // Al haber sacado 'username' toma '...' para los valores restantes y en este caso los guarda dentro de 'values' 
console.log(username2);
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
const arrayN = [1, 2, 3, 4, 5, [2, 3, 4, 5, [6, 7, 8]]];
console.log(arrayN.flat(3));

//ECMA10 - flatMap - Permite aplanar los elementos de un array en un nivel, pasando una funcion que mapea cada elemento.
const arrayMap = [1, 2, 3, 4, 5];
console.log(arrayMap.flatMap(v => [v, v * 2]));

//ECMA10 - TrimStart - TrimEnd - Permite eliminas espacios en blanco al inicio y al final de algun string
const greating1 = '               Hello World       '
console.log(greating1.trimStart());  // Elimina espacios al inicio de un String 
console.log(greating1.trimEnd());    // Elimina espacios al final de un String

// ECMA10 - Try and Catch - permite manejar errores de tiempo de ejecución. Literalmente permite intentar (try) ejecutar el código y “atrapar (catch)” errores que pueden ocurrir en él.
try {
    hello();
} catch (error) { // Antes esta era la sintaxis para cuando entrara en catch por causa de un error
    console.log(error);
}
try {
    anotherFun();
} catch { // Ahora podemos colocar un mensaje o alguna logica para cuando entre en un catch
    console.log('Esto es un error');
}

// ECMA10 - fromEntries - Ahora tambien permite convertir un Arrays de Arrays en Objetos.
const entries = new Map([['name', 'Alexis'], ['age', 23]]);
console.log(entries);
console.log(Object.fromEntries(entries));

//ECMA11 - OptionalChaining - Permite validar si el parametro de un objeto existe o no. en caso de undefined o null este no detiene el flujo del codigo.
const users = {
    alexis: {
        country: 'Vzla'
    },
    azul: {
        country: 'AR'
    }
} 
console.log(users.alexis.country);  // Encadenando elementos podemos acceder a uno en especifico
console.log(users?.feli?.country);  // '?' es como se representa el optional chaining. Recomendable usar úncamente cuando probablemente un valor no exista para evitar ocultar errores.

// ECMA11 - BigInt - Ayuda a manejar numeros de gran tamaño. 
const aBigNumber = 309377309235134903n;    // Antes teniamos 'n' para menejar y saber que trabajamos estos numeros
const anotherBN = BigInt(309377309235134903);   // Al enviar parametro de tipo entero (que tiene maximo representable) 
console.log(aBigNumber);
console.log(anotherBN);  // 'BigInt' recibira el numero acortado que pueda ser representable con JS.
// La solucion para esto e pasarlo como string y 'BigInt' se encargara de convertirlo a tipo number

// ECMA11 - NullIsh - Valida si el valor existe o vienen en formato 'null', en ese caso podemos asignarle algun valor
const anotherNumber = null; // En el caso de tener un valor sera pasado en la validacion
const validate = anotherNumber ?? 5; // En caso que sea null tomara el valor que se ligue a los '??'
console.log(validate);

// ECMA11 - Promise AllSettled - Devuelve una promesa que se cumple despues que todas las promesas dadas se hayan cumplido o rechazado.
const promise1 = new Promise ((resolve, reject) => reject('Reject'))
const promise2 = new Promise ((resolve, reject) => resolve('resolve'))
const promise3 = new Promise ((resolve, reject) => resolve('Resolve 2'))

Promise.allSettled([promise1, promise2, promise3])  // Recibe un iterable de promesas con el cual
    .then(response => console.log(response));   // Devuelve una matriz de objetos que describe el resultado de cada promesa

// ECMA11 - Global - provee funciones propias de cada lenguaje o entorno, su nombre varia dependiendo de la plataforma. 'GlobalThis' Se creo para estandarizarlos y este puede ser usado en cualquier plataforma
console.log(window);    // Es el nombre que recibe en el navegador.
console.log(global);    // Es el nombre que recibe en Node.
console.log(self);      // Es el nombre que recibe en WebWorked.
console.log(globalThis);// Devuelve la info segun el contexto donde este siendo utilizado

//ECMA11 - MatchAll - Devuelve un iterable con todas las coincidencias de un string especifico a partir de la expresion regular
const newRegex = /\b(Apple)+\b/g;
const fruits3 = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruits3.matchAll(newRegex)) {    // Usamos el metodo 'MatchAll' y el metodo 'regex' o la regla que va a seguir para buscar
    console.log(match); // Los resultados se almacenaran el match y lo imprimiremos en consola
}

//ECMA11 - Dynamic Import - Permite manejar modulos dinamicamente. Llamar a ellos cuando se vayan a utilizar y no al iniciar la app. Haciendo la pagina mas rapida ya que tiene que cargar menos recursos
export function hello () {  // Este sera el modulo, que se encontrara en un archivo aparte de nuestra PC
    console.log('Hola Mundo');
}
// Este sera el codigo donde llamaremos al Modulo de manera dinamica 'Solo cuando se vaya a utilizar'
const button = document.getElementById('btn');

button.addEventListener('click', async function () {    // Creamos una funcion anonima que ejecutara el import
    const module = await import ('./module.js'); // El 'import' almanecara el resultado del modulo en la variable.
    console.log(module);    // Que despues sera ejecutada en consola
    module.hello();
})

//ECMA12 - Numeric Separators - Ayuda visual en los casos donde tenemos valores numericos muy grandes.
const numericValue = 100_000_000_000_000;  // Con '_' los separamos para poder entenderlos mejor visualmente. 

console.log(numericValue); // No afectara a la hora de trabajar con ellos.

//ECMA12 - Replace All - Filtro para buscar y reemplazar textos
const string1 = 'JavaScript es un maravilloso lenguaje de programacion'
const replacedString = string1.replace('JavaScript', 'TypeScript') // 'replace' busca y remplaza el primer valor por el segundo valor ingresado
console.log(replacedString);    

// ECMA12 - Promise Any - Captura la respuesta de la primera promesa que se ejecute de manera satisfactoria.
// const promise1 = new Promise ((resolve, reject) => reject('Reject')) 
// const promise2 = new Promise ((resolve, reject) => resolve('resolve'))
// const promise3 = new Promise ((resolve, reject) => resolve('Resolve 2'))

Promise.any([promise1, promise2, promise3]) // Captura la respuesta de la primera promesa que se ejecute de manera satisfactoria.
    .then(response => console.log(response));   // Si es reject la ignora y devuelve el primer resolve

//ECMA 13 - At - Recibe un valor numerico y devuelve el elemento en esa posicion
const arrayApi = ['one', 'two', 'three', 'four', 'five', 'six']
console.log(arrayApi.length(-1));  // Anteriormente esta era la manera de llegar al ultimo elemento sin conocer su longitud
console.log(arrayApi.at(-1));  // Los valores negativos empiezan a contar desde el ultimo elemento del array 
// Mayormente usado en APIs donde no sabemos su tamaño




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

// Funciones flecha o Arrow Functions - Alternativa a una funcion, con una forma mas amigable de trabajar y una sintaxis mas entendible
function square (num) {     // Forma con la funcion normal
    return num * num;
}
const square = (num) => {   // Se puede utilizar let var const, pero al ser una funcion se recomienda const
    return num * num;
}
const square = num => num * num; // Con solo un argumento podemos dejar de lado los parentesis, las llaves y el return. 

// Operadores - Aritmeticos, Asignacion, Comparacion
var h = 1;                                          // '=' Asigna un valor a la variable
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

let array = Object.value(obj);                        // Propiedad de Objetos que permiten convertir los valores en un array

// Objects "Funcion Constructora" - Sirve para crear varios objetos a partir de nueva informacion sin necesidad de hacerlo manualmente.
function auto(marca, modelo, annio) {               // Funcion que tendra como parametro las propiedades que tendra cada objeto
    this.marca = marca;                             // Como 'this' hace referencia al objeto que se esta creando en ese momento
    this.modelo = modelo;                           //Todos los valores que pasemos por parametro en la funsion
    this.annio = annio;                             // Seran almacenados en las propiedades de ese objeto
}
var autoNuevo = new auto("Tesla", "Model 3", 2020)  // Especificar que se va a construir una nueva instancia, seguida la funcion y parametros

//! Metodos de Arrays - Existen metodos de Array para recorrer, devolver valores o un array con nuevos resultados
const art = [                                       // Se puede crean un Array con objetos dentro
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];
// Filter - Filtra elementos de un Array, devuelve los que evaluen a 'True' y los almacena en forma de en un nuevo array.
const aFiltrados = art.filter(art => (art.costo) <= 1000)  // Variable de resultado. Almacenaran elementos filtrados.
// console.log(re);

// Map - Mapea todos los elementos del Array y les aplica una funcion devolviendo el resultado de esa funcion en nuevo array.
const nomArt = art.map((art => art.nombre))     // En este caso la funcion devolvera los nombre de los elementos del array

// Find - Consiste en encontrar el primer elemento del array que cumpla con la condicion especificada, los demas no los verificara.
const findArt = art.find(function(articulo){    // Variable que alamcenara funcion y se convertira en nuevo array de resultados
    return articulo.nombre === "Laptop"         // En este caso find nos traera el articulo que cumpla con la condicion especificada
})
// ForEach - Filtra dicho Array sin modificarlo y retornara la informacion solicitada. Ejecuta la funcion una vez por cada elemento del array
art.forEach(function(articulo){                 // No almacena ningun dato en nuevo Array, retorna informacion solicitada
    console.log(articulo.nombre);               // Imprimira todos los valores de propiedad 'nombre' de articulos que pasen por la funcion
});
// Some - Consiste validar si es Verdadero o falso la condicion que colocamos. Tambien crea un nuevo Array donde almacena resultado
const artBar = art.some(function (articulo) {
    return articulo.costo <= 700;
});

// Reduce - Puede hacer casi cualquier cosa con los elementos de un arreglo. Tiene parametros especiales (acumulador, elemento)
const re1 = art.reduce((max, art) => max + art.costo, 0)  // Suma el acumulador con el costo del art iterado. El 0 es el valor inicial del acc

// Se puede usar reduce a la par de Math.max para encontrar el numero maximo dentro del un array
const re2 = art.reduce((max, item) => Math.max(max, item.costo), -Infinity) // -Infinity - valor especial que representa el número más negativo posible, garantizando que en primera iteración cualquier número positivo o negativo se considere como candidato a ser el máximo.

const re3 = art.reduce((max, item) =>           // Podemos imprimir los nombres de los elementos.
    `${max === '' ? '' : `${max}, `} ${item.nombre}`, '')   // Usamos el Operador Terniario y template string para poner o no la , al inicio 

const re4 = art.reduce((max, item) => {         // Podemos Filtra y mapear datos a la vez
    if (item.costo > 2000) {                    // Condicional que no tome en cuenta elementos mas costo que 2000. Devolviendo mas baratos.
        return(max)
    }
    return(max.concat(item))
}, [])

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
document.querySelector('.icon_1').src = object[0].icon; // Acceder directamente a la propiedad src de la etiqueta

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
// Canvas - Etiqueta de dibujo. Fuciona como un eje de cordenadas pero representado de forma diferente

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






//------------------------------------------------------------------------------------------------------------------------------------------
// Trabajando con JSON // Es el Estandar de intercambio y almacenamiento de datos en formato Objetos. Comunmente usado entre cliente-servidor
const requestURL = './data.json'; // Almacenando la URL del json en una variables
const request = new XMLHttpRequest(); // Instancia de solicitud desde el constructor 'XMLHttpRequest()' usando 'new'
request.open('GET', requestURL);    // Abriendo nueva solicitud utilizando el metodo 'open'
request.responseType = 'json'   //  Los datos Json se reciben como string. Usando 'responseType'
request.send();
request.onload = function () {
    const objectJson = request.response;

    printName(objectJson)
};

// API Fetch - Permite obtener datos desde un URL



// Fetch-Them - Traer info a travez de una API/Objeto JSON
fetch("https://rickandmortyapi.com/api/character")  // Capturar informacion de una API "URL de API"
.them((resp) => resp.json())    // Tomar respuesta 'resp' de API (los .json se envian en string) y convertirla en formato .json
.them((data) => {  // 'data' representa lo que era 'resp' pero pasada a formato JSON
    console.log(data.results);  
});

// Async-Await - Alternativa a '.them', Hacer codigo mas limpio // Try-Catch - Intentar ejecutar y si falla, mostrar error sin danar codigo
const fetchNasa = async () => {
    try {
        const resp = await fetch('https://api.nasa.gov/planetary/apod?api_key=Xwh5MmPFt4skWrxJ17Dk7FE0Yda1gtX5e0a6xOix');
        const data = resp.json();   // Misma forma pero implementada con variables. Forma de hacerlo en async Functions

        const spaceInfo = document.createElement('div');
        spaceInfo.innerHTML = /* Con Template Literals podemos crear toda una estructura html, sin necesidad de crea etiqueta por etiqueta */
        `
    <img src='${data.img}'/>
    <h4>${data.title}</h4>
    <p>${data.explanation}</p>
        `;
        infoNasa.append(spaceInfo)  // Adjuntando la estructura creada a la etiqueta HTML contenedora
    } catch(err) {  // Si no funciona, captura y muetra el (err) sin danar todo el codigo y detener el flujo del mismo
        console.log(err);   // Mostramos en consola para enteder donde esta el error
    }
}









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


// Objeto Json - Estructura de los JSON. Generalmente es como viene la info en las APIs
[                                   // En caso que tenga mas de un objeto se pone entre [] para hacerlo un 'array de objetos'
    {
        'name': 'Luke Skywalker',   // Separados por ',' los pares (clave valor)
        'id': 1                     // El nombre de la clave debe ir entre comillas
    },                              // Al ser mas de un objeto se debe separar por ','
    {
        'name': 'Leia Skywalker',
        'id': 2
    }
]



//-------------------------------------------------------------------------------------------------------------------------------------------
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