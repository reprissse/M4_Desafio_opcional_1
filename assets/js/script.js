//clase paciente: representa a un paciente individual
class Paciente {
    //constructor (plantilla) se llama al crear un nuevo objeto paciente
    constructor(nombre, edad, rut, diagnostico) {
        //_indica que es privada
        //nombre: propiedad 1
        this._nombre = nombre;
        //edad: propiedad 2
        this._edad = edad;
        //rut: propiedad 3
        this._rut = rut;
        //diagnostico: propiedad 4
        this._diagnostico = diagnostico;
    }


/******************************************* */

    //Este es un getter para la propiedad 'nombre' y permite acceder al objeto Paciente
    get nombre() {
        return this._nombre;
    }

    //Este es un setter y permite modificar los valores de las propiedades privadas
    set nombre(value) {
        this._nombre = value;
    }

    
    //Este es un getter 
    get edad() {
        return this._edad;
    }

    //Este es un getter
    get rut() {
        return this._rut;
    }
    
    //Este es un getter
    get diagnostico() {
        return this._diagnostico;
    }


/******************************************* */
//Este metodo devuelve una cadena con los datos del paciente
    mostrarDatos() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, RUT: ${this.rut}, Diagnóstico: ${this.diagnostico}`;
    }
}

/******************************************* */
//esta clase representa al consultorio
class Consultorio {
    constructor(nombre) {
        this.nombre = nombre;
        //los pacientes se almacenan en un [array paciente]
        this.pacientes = [];
    }

    //este metodo agrega un paciente al [array paciente]
   agregarPaciente(paciente) {
       this.pacientes.push(paciente);
   }

   
   //Este metodo muestra todos los pacients en la consola
   mostrarPacientes() {
       console.log('Lista de pacientes:');
       for (let paciente of this.pacientes){
           paciente.mostrarDatos();
       }
   }

   //Este metodo busca un paciente por nombre y devuelve el primero que coincide (rut al ser unico, mejor opción de busqueda)
   buscarPacientePorNombre(nombre) {
    let pacienteEncontrado = null;

    for (let paciente of this.pacientes){
        if (paciente.nombre.toLowerCase() === nombre.toLowerCase()){
            pacienteEncontrado = paciente;
            break; 
        }
    }
    
    return pacienteEncontrado;
}
}

//se crea un 'NEW consultorio'
let consultorio = new Consultorio('Mi Consultorio');

// Se agregan pacientes al consultorio
consultorio.agregarPaciente(new Paciente('Juan', 30, '12345678-9', 'Resfriado'));
consultorio.agregarPaciente(new Paciente('Ana', 25, '98765432-1', 'Alergia'));
consultorio.agregarPaciente(new Paciente('Raquel', 40, '98765432-1', 'Tunel carpeano'));
consultorio.agregarPaciente(new Paciente('Fabiola', 18, '12345678-9', 'Migraña'));
consultorio.agregarPaciente(new Paciente('Carlos', 35, '98765432-1', 'Colon irritado'));
consultorio.agregarPaciente(new Paciente('Andrea', 23, '98765432-1', 'Colitis'));
consultorio.agregarPaciente(new Paciente('Andrea', 13, '98765432-1', 'Colitis'));

//Mostrar pacientes en la página
let divPacientes = document.getElementById('pacientes');
for (let paciente of consultorio.pacientes) {
    divPacientes.innerHTML += `<p>${paciente.mostrarDatos()}</p>`;
}



// Función para el boton de busqueda
function buscarPaciente() {
    let nombre = document.getElementById('nombrePaciente').value;
    let paciente = consultorio.buscarPacientePorNombre(nombre);
    let divPacienteBuscado = document.getElementById('pacienteBuscado');
    if (paciente) {
        divPacienteBuscado.innerHTML = `<p>${paciente.mostrarDatos()}</p>`;
    } else {
        divPacienteBuscado.innerHTML = '<p>No se encontró al paciente</p>';
    }
}
