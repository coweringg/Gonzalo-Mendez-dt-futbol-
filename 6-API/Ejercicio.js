async function obtenerUsuarios() {
    try {
        const response = await fetch('https://66279b8eb625bf088c08fd8e.mockapi.io/api/usuarios');
        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error('Hubo un problema al obtener los usuarios:', error);
    }
}

async function imprimirNombresUsuarios() {
    try {
        const usuarios = await obtenerUsuarios();

        usuarios.forEach(usuario => {
            console.log(usuario.nombre);
        });
    } catch (error) {
        console.error(error.message);
    }
}

imprimirNombresUsuarios();
