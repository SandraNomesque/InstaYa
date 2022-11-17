export default function RegistroUsuarios(){
    const crear = () => {
        alert ("Creado :)")

    }
   
    return (
        <form>
             <br />
            <h3>Gestión de paquetes - Registro Usuarios</h3>
            <br /> <br />
            <div>
                <label htmlFor = ""> Nombres</label> <br />
                <input  type ="text" /><br />
           
                <label htmlFor = ""> Usuario</label><br />
                <input type ="text" /><br />
          
                <label htmlFor = ""> Contraseña</label><br />
                <input type ="text" /><br />
           
                <label htmlFor = ""> Correo</label><br />
                <input type ="text" /><br />
           
            </div>
            <br /> <br />
            <button onClick={crear}>Crear</button>
            <br /> <br />
        </form>
    )
   
}