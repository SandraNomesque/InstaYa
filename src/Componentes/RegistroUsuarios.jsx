export default function RegistroUsuarios(){
    const crear = () => {
        alert ("Creado :)")

    }

    return (
        <form>
            <p1>Gestión de paquetes - Registro Usuarios</p1>
            <p>
                <label htmlFor = ""> Nombres</label>
                <input  type ="text" />
            </p>
            <p>
                <label htmlFor = ""> Usuario</label>
                <input type ="text" />
            </p>
            <p>
                <label htmlFor = ""> Contraseña</label>
                <input type ="text" />
            </p>
            <p>
                <label htmlFor = ""> Correo</label>
                <input type ="text" />
            </p>
            <button onClick={crear}>Crear</button>
        </form>
    )
}