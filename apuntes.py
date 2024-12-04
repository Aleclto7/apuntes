"""Module providing a function printing python version."""
# En Python el codigo se ejecuta de Arriba hacia abajo
print("Hola Mundo!")    #
print("El weta" * 4)    # * Multiplica la cantidad de veces que algo sera impreso


# VARIABLES - NO puede iniciar con numeros
nombre_curso = "Ultimate Python"


# STRING - Con comillas triples envolvemos textos mas extensos
descripcion_curso = """
Ultimate Python, 
este curso contempla todo lo que necesitas aprender para encontrar trabajo como programador
"""

print(nombre_curso, descripcion_curso)  # Se Pueden Imprimir varias variables.

print(len(descripcion_curso))           # Permite saber la longitud de un String en Particular
print(nombre_curso[0])                  # [] Permite acceder a los caracteres de un String en una Variable
print(nombre_curso[0:8])                # : Permite recortar caracteres. Senalando desde donde hasta donde vamos a cortar
print(nombre_curso[9:])                 # Si no senalamos el final python tomara el resto del string
print(nombre_curso[:8])                 # Al igual que en el ejemplo anterior. Python completara el valor y empezara desde 0
print(nombre_curso[:])                  # Siguiendo la misma logica tomara desde el 0 hasta el final

nombre_curso[15] = 'N'                  # Los string en Python son Inmutables. No puedes cambiar el caracter de una cadena directamente
nombre_curso = "L" + nombre_curso[:15]  # La alternativa es crear una nuevo string con el valor cambiado y el resto del string anterior

# F-STRING O FORMATO STRING = Forma de interpolar variables dentro de cadenas de texto. Permite incluir variables dentro de {}
nombre = 'Alexis'
apellido = 'Calixto'
# nombre_completo = nombre + " " + apellido     # Manera usual de concatenar
nombre_completo = f"{nombre} {apellido}"        # F-String Forma de interpolar variables dentro de cadenas de texto
print(nombre_completo)


# METODOS STRING
animal = "chanCHito feliz"

print(animal.upper())                   # upper()   Convierte el String dentro de la variable a mayusculas
print(animal.lower())                   # lower()   Convierte el String dentro de la variable a minusculas
print(animal.capitalize())              # capitalizer() Convierte el Primer caracter de la cadena de String en Mayuscula
print(animal.title())                   # title()   Convierte el Primer caracter de cada String en Mayuscula
print(animal.strip())                   # strip()   Remueve los espacios que se encuentren a los Extremos del String
print(animal.strip().capitalize())      # Podemos encadenar metodos
print(animal.find("CH"))                # Devuelve el indice donde se encuentran los caracteres. Si devuelve -#  es que no fue encontrado
print(animal.replace("nCH", "j"))       # Remplaza los caracteres senalados. Si no lo encuentra no se cambia nada
print("nCH" in animal)                  # Devuelve true or false en caso de encontrar o no los caracteres asignados


# SECUENCIA DE ESCAPE
curso = "Ultimate \"Python\""           # \ Indica que lo que esta a su derecha python no lo lea como instruccion del lenguaje. 
curso = "Ultimate \nPython"             # \n Crea un salto de linea 


# NUMEROS 
entero = 2                              # Integer
decimal = 1.2                           # float
imaginario = 2 + 2j #seria -> 2 +  2i   // i = √-1 (NO existe numero * si mismo de resultado -1) POr eso es imaginario
print(1 / 3)                            # Dividir danco decimales de resultado
print(1 // 3)                           # Dividir dando resultado sin decimales
print(8 % 3)                            # Modulo - Devuelve lo que sobra en una division 
print(2 ** 3)                           # Potencia - Elevar los numeros. Multiplicarlo las veces asignadas

numero = 1
# numero = numero + 2                   Sumarle uno al valor de la vairable y almacenar resultado en misma variable
numero += 2                             # Mismo resultado pero diferente forma de escribirlo. Mas corta
numero -= 2                             # Se puede realizar con diferentes operadores (numero /=2 - numero *= 2)


# NUMEROS FUNCIONES
print(round(1.3))                       # Devuelve el numero entero al que este mas cercano
print(abs(-77))                         # Entregara el valor absoluto del numero que pasemos a la funcion (Sacando el signo - o +)

import math                             # Importando Modulo Math (Es codigo ya escrito en otro archivo que podemos importar y utilizar)
print(math.ceil(1.1))                   # Nos lleva al numero superior entero mas cercano
print(math.floor(1,99999))              # Nos lleva al numero inferior entero mas cercano
print(math.isnan("23"))                 # Para verificar si lo que se pasa no es un numero isnan -> (is not a number)
print(math.pow(10, 3))                  # Permite elevar numeros a la potencia
print(math.sqrt(9))                     # Permite saber la raiz cruadrada
# https://docs.python.org/es/3/library/math.html /  Todos los metodos que tiene el Modulo de Math


# CONVERSION TIPOS
x = input("")
int(x)                                  # Transforma datoa a Entero
str(x)                                  # Transforma datos a cadena de texto
float(x)                                # Transforma datos a Float
bool(x)                                 # Transforma datos a Boolean. falsy ("0"- " " - 0 - none) todo lo demas lo evalua como truthy


# COMPARADORES LOGICOS - Devuelven truly or false
print(1 > 2)                            # Mayor que 
print(1 < 2)                            # Menor que
print(1 <= 2)                           # Menor o igual que
print(1 >= 2)                           # Mayor o igual
print(2 == 2)                           # Igual a
print(2 != 2)                           # No igua a


# IF - ELSE - ELIF
edad = 15
if edad > 54:
    print("Puede ver la pelicula con descuento")
elif edad > 17:
    print("Puedes ver la pelicula")
else:
    print("No puedes entrar")
    print("Ve a otro lado")

print("Listo")


# OPERADOR TERNIARIO - Forma de escribir una funcion para que el resultado sea almacenado en una variable
edad = 15
mensaje = 'Es mayor' if edad > 17 else 'es menor'

print((mensaje))


# OPERADORES LOGICOS - And, or, not 
gas = False
encendido = True
edad = 18

if gas and encendido:                   # And - Tienen que ser ambos true
    print('Puedes avanzar')
if gas or encendido:                    # Or -  Puede ser uno de los dos 
    print('Puedes avanzar')
if not gas or encendido:                # Not - Cambia el valor de true a false del y viseversa. Niega el estado actual por lo cual lo cambia
    print('Puedes avanzar')


# OPERACIONES DE CORTO-CIRCUITO - 
# Al tener varios And y se evalue el primer False, Python no ejecutara el resto de And. Ahorrando procesamiento
# En el caso de Or el corto-circuito ocurre al evaluar el primero True. Siempre se evalua de izquierda a derecha  
if not gas and encendido and edad > 17: 
    print('Puedes avanxar')


# CADENA DE COMPARADORES - Forma de encaderar operadores de comparacion
edad = 25
# if edad >= 15 and edad <=65:
#     print('Puedes entrar a la piscina')

if 15 <= edad <= 65:                    # Misma logica de arriba. Recordar modificar comparadores
    print('Puedes entrar a la piscina')


# FOR - Su principal funcion es iterar en una lista de elementos
for numero in range(5):                 # Range crea una lista con 5 elementos (0 a 4) la cual se almacenara en la variable numero
    print(numero, numero * 'Hola Mundo ')


# FOR ELSE - 
buscar = 10
for numero in range(5):                 # Range(5) = Iterable (Todo con lo que se pueda iterar)
    print(numero)
    if numero == buscar:
        print('Encontrado', buscar)
        break                           # Permite detener la iteracion. En este caso cuando el if se cumpla 
else:                                   # Se ejecuta al no haber cumplido la validacion anterior y no encontrarse con ningun 'break'
    print('No encontre el numero buscado :(')


# ITERABLES - Todo con lo que podemos iterar (Tambien podemos usar Listas y Tuplas)
for char in "Ultimate Python":          # Podemos usar o crear cualquier iterable. (Como Strings)
    print(char)


# WHILE - Loop que permite iterar siempre y cundo se este cumpliendo una condicion
numero = 1
while numero < 100:
    print(numero)
    numero *= 2


# LOOPS INFINITO - Loops sin condicional de salida. Siempre debemos poner un break para ecitar que el OS mate nuestra App
while True:
    comando = input("$ ")
    print(comando)
    if comando.lower() == "salir":
        break


# LOOPS ANIDADOS - Al imprimirse de arriba hacia abajo Primero se ejecuta el For de "j" y al entrar en el de "k" no sale hasta terminarlo
for j in range(3):                      # outer for/loop - Tiene que terminar el Inner para que siga el Outer.
    for k in range(2):                  # inner for/loop - Cuando entra en este, no vuelve al Outer hasta terminar el inner. El inner puede repetirse
        print(f"{j}, {k}")


# FUNCIONES - Util para seccionar cuando se trabaja con mucho codigo. 
print('Hola mundo')                     # Funcion propia de Python. Sirve para imprimir texto en Consola

def hola():                             # Sintaxis de la funcion
    print('Hola Mundo!')                # Contenido de la funcion
    print('Ultimate Python')

hola()                                  # Forma de llamar e inicializar la funcion


# PARAMETROS Y ARGUMENTOS - Parametro = Variable donde ingresaremos info para ser usada en la funcion. Argumento = Info que usara la funcion
def hola(nombre, apellido):             # Cuando nos referimos a la variable que se usa para pasar datos a la funcion, se le conoce como 'Parametro'
    print("Hola Mundo")
    print(f"Bienvenido {nombre} {apellido}")

hola("Alexis", "Calixto")               # Cuando nor referimos al valor que ingresamos en esa variable o parametro se le conoce como 'Argumento'
hola("Chanchito", "Feliz")


# ARGUMENTOS OPCIONALES - Es cuando le pasamos a un parametro el valor que va a usar como Argumento en caso que no se le ingrese uno posteriormente
def hola (nombre, apellido = 'Felix'):
    print(f"Bienvenido {nombre} {apellido}")

hola("Alexis")


# ARGUMENTOS NOMBRADOS - Al momento de llamar a la funcion y pasarle los argumentos no ordenados. Asignamos que argumento va a que parametro.
hola(apellido = "Calixto", nombre = "Alexis")# Al nombrar el primer argumento, los demas tiene que ser nombrados igual ya que lanzara un error


# XARGS - Forma de Hacer uso de pocos o muchos argumentos en la misma funcion sin necesidad de agregar o eliminar parametros
def suma(*numeros):                     # * Convierte en Iterables todos los argumenos que se alacenen en numeros.
    resultado = 0
    for numero in numeros:              # Cuando usamos parametros iterables tenemos que hacer uso de los For
        resultado += numero
    print(resultado)

suma(2, 5, 7, 45, 32)
suma(2, 5, 7)


# KWARGS - Keywords Arguments = Manera de enpaquetar todos los parametros en solo 1 parametro
def get_product(**datos):
    print(datos["id"], datos["name"])  # [] Forma de acceder a los valores de un Diccionario. Se tienen que llamer entre ""

get_product(id="23",                    # Cuando se usa kwargs tenemos que indicar el nombre del parametro al momento de llamar una funcion
            name="iPhone",              # Esto convierte a "datos" en un Diccionario
            desc="Esto es un IPhone")


# RETURN - Permite obtener valores de las funciones y poder asignarlo y/o usarlo fuera de ella
def suma(a, b):
    resultado = a + b
    return resultado                    # Devolvera el valor de resultado donde se haya llamado la funcion

c = suma(1, 2)                          # El resultado de almacena en la variable 'c'
d = suma(c, 2)
print(d)


# ALCANCE - Variables declaradas en funciones solo pueden usarse en mismas funciones y Las declaradas Globalmente no pueden ser usadas en funciones
saludo = "Hola Global"                  # Las variables globales Son MALA PRACTICA. Debemos crear variables para los contextos donde las vamos a usar
def saludar ():
    global saludo                       # Manera de que Python asigne a saludo global el valor que esta dentro de la funcion -MALA PRACTICA-
    saludo = "Hola Mundo"

print(saludo)


# DEPURANDO FUNCIONES - Encontrar errores en el codigo. Permite ejecutar el codigo de manera pausada y asi visualizando resultados y posibles errores
def largo(texto):
    resultado = 0
    for char in texto:
        resultado += 1
        return resultado
    
print("Chanchito")                      # Breackpoint hace que al momento de la depuracion el codigo se detenga en ese punto y poder analizar. 
l = largo("Hola Mundo")
print(l)


#





n1 = input('Ingresa primer numero')     # Forma de permitir a usuarios ingresar informacion
