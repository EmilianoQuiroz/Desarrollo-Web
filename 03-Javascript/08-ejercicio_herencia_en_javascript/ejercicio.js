//***** Ejercicio Herencia Javascript *****//

/*Crear una clase Persona y asignarle los atributos nombre, apellido, edad y un atributo estatico llamado contadorPersonas. La clase Persona va a tener los metodos getIdPersona(), getNombre(), getApellido(), getEdad(), setEdad(), toString(). De esta clase Persona debemos crear una clase hija llamada Empleado, que va a contar con los atributos idEmpleado y sueldo, a si cez va a tener los metodos getIdEmpleado(), getSueldo(), setSueldo() y toString. La segunda calse hija que se va a desprender de la clase Persona va a ser la clase Cliente, esta va a contar con los atributos idCliente y fechaRegistro, ademas de contar con los metodos getIdCliente(), geFechaRegistro(), setFechaRegistro y toString()*/

//Creamos la clase Person
class Persona {
    
    //Definimos nuestro atributo estatico
    static contadorPersonas = 0;

    //Definimos los atributos de nuestra clase con un constructor
    constructor(nombre,apellido,edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    //Agregamos los metodos
    get idPersona (){
        return this._idPersona;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get apellido (){
        return this._apellido;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
    get edad (){
        return this._edad;
    }
    set edad (edad){
        this._edad = edad;
    }
    toString() {
        return `${this._idPersona} ${this._nombre}  ${this._apellido} ${this._edad}`;
    }
}

//Creacion de la clase Empleado
class Empleado extends Persona{

    //Definimos la variable estatica de contador empleados
    static contadorEmpleados = 0;

    //Definimos los atributos de la variable empleado con un constructor
    constructor(sueldo){
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    //Creamos los metodos de nuestra clase
    get idEmpleado (){
        return this._idEmpleado;
    }
    get sueldo (){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ' ' + this._idEmpleado + ' ' + this._sueldo;
    }
}

//Creacion de la clase Cliente
class Cliente extends Persona{
    
    //Definimos la variable estatica de contador Clientes
    static contadorClientes = 0;

    //Definimos los atributos de nuestra clase
    constructor(fechaRegistro){
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    //Agregamos los metodos
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
    }
}