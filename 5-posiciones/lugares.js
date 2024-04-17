/*
Salen de la oficina y de camino a los vestuarios conocen dos jugadores más.

Se presenta Nahitan Nández, mediocampista, que comenta que no tiene apodo.
Y a su lado, te estrecha la mano el mediocampista Federico Valverde, conocido como "Pajarito".

Ya es dificil llevar registro de todos los nombres nuevos.

Escriba un programa que:
- guarde en una colección información de los jugadores hasta el momento presentados
- imprima la información de los jugadores en el formato: {nombre} "{apodo}" {apellido} (edad) - {posiicion}.

¿Cómo puedo obtener de la colección solamente los que son mediocampistas?
*/

function edad(fechaNacimientoStr) {
    var fechaNacimiento = new Date(fechaNacimientoStr);
    var fechaActual = new Date();
    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    
    if (fechaActual.getMonth() < fechaNacimiento.getMonth() || 
        (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    
    return edad;
}

var jugadores = [
    {
        nombre: "Luciano",
        apellido: "Rodriguez",
        apodo: "Lucho",
        fechaNacimiento: "2003-07-16",
        posicion: "delantero"
    },
    {
        nombre: "Nahitan",
        apellido: "Nández",
        apodo: "",
        fechaNacimiento: "1995-12-28",
        posicion: "mediocampista"
    },
    {
        nombre: "Federico",
        apellido: "Valverde",
        apodo: "Pajarito",
        fechaNacimiento: "1998-07-22",
        posicion: "mediocampista"
    }
];

jugadores.forEach(function(jugador) {
    var edadJugador = edad(jugador.fechaNacimiento);
    console.log(jugador.nombre + ' "' + jugador.apodo + '" ' + jugador.apellido + " (" + edadJugador + " años) - " + jugador.posicion);
});

var mediocampistas = jugadores.filter(function(jugador) {
    return jugador.posicion === "mediocampista";
});

console.log("\nMediocampistas:");
mediocampistas.forEach(function(mediocampista) {
    var edadMediocampista = edad(mediocampista.fechaNacimiento);
    console.log(mediocampista.nombre + ' "' + mediocampista.apodo + '" ' + mediocampista.apellido + " (" + edadMediocampista + " años)");
});

