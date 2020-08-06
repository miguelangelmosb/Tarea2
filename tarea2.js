alert('Bienvenidos al restaurante Korben')
const pregunta = prompt('Cuantas personas son para la reserva: ')
let contador = 0;
const myArray = []

const usuario = 
{
    nombre : '',
    apellido : '',
    edad : 0,

    metodoDatos() 
    {
        return `Nombre: ${this.nombre}\nApellido: ${this.apellido}\nEdad: ${this.edad}`;
    }
};
     
while (contador < pregunta)
{
    usuario.nombre = prompt('Ingresa el nombre: ');
    usuario.apellido = prompt('Ingresa el apellido: ');
    usuario.edad = parseInt(prompt('Ingresa la edad'));
    
    myArray.push(Object.assign({}, usuario));
    contador ++;
}

myArray.forEach(usuario => console.log(`Datos de la reserva:\n${usuario.metodoDatos()}`));