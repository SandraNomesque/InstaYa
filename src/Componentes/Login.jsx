export default function Login(){
    const login = () => {
        alert ("Guardardo :)")

    }
    return (
        <form action ="">
             <p></p>
                <p1>Gestión de paquetes - Login</p1>
                <p></p>
                <p2><label htmlFor = ""> Registrarse</label></p2>
            <p>
                <label htmlFor = ""> Usuario</label>
                <input type ="text" />
            </p>
            <p>
                <label htmlFor = ""> Contraseña</label>
                <input type ="text" />
            </p>
            <button onClick={login}>Login</button>
        </form>
    )
}
