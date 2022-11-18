export default function RegistroUsuarios(){
    const crear = () => {
        alert ("Creado :)")

    }

    return (
        <form>
            <br /><br />
             {/* contenedores */}
            <div class="container text-center">
                <div class="row">  {/* clase fila */}
                    <h3>Gestión de paquetes - Registro Usuarios</h3>
                </div>
                <br />
                <div class="row">  {/* clase fila */}
                    <div class="col -3 "> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3 ">
                        <label >Nombre</label> 
                    </div>
                    <div class="col-3 ">
                        <input type ="text" />
                    </div>
                    <div class="col -3"></div>
                    
                </div>
                <br />
                <div class="row">  {/* clase fila */}
                <div class="col -3"> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col -3"> {/* columna 2 */}
                        <label htmlFor = "">Usuario</label> 
                    </div>
                    <div class="col-3"> {/* columna 3 */}
                        <input type ="text" />
                    </div>
                    <div class="col -3"></div>{/* columna 4 */}
               
                </div>
                <br />
                <div class="row">  {/* clase fila */}
                    <div class="col -3 "> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3 ">
                        <label> Contraseña</label> 
                    </div>
                    <div class="col-3 ">
                        <input type ="text" />
                    </div>
                    <div class="col -3"></div>
                    
                </div>
                <br />
                <div class="row">  {/* clase fila */}
                <div class="col -3"> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col -3"> {/* columna 2 */}
                        <label htmlFor = ""> Correo</label> 
                    </div>
                    <div class="col-3"> {/* columna 3 */}
                        <input type ="text" />
                    </div>
                    <div class="col -3"></div>{/* columna 4 */}
               
                </div>
            </div>
            <br /> <br />
                <button onClick={crear}>Crear</button>
            <br /> <br />
        </form>
    )
}