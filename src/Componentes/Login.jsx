export default function Login(){
    const login = () => {
        alert ("Guardardo :)")

    }
    return (
        <form action ="">
            <br />
            <h3>Gestión de paquetes - Login</h3>
            <br />
            <p><label htmlFor = ""> Registrarse</label></p>
           
            <div>
                <label htmlFor = ""> Usuario</label> 
                <br />
                <input type ="text" />
                <br />
                <label htmlFor = ""> Contraseña</label>
                <br />
                <input type ="text" />
            </div>
            <br /><br />
                   
            <button onClick={login}>Login</button>
            <br /><br />
        </form>
    ) 
}
