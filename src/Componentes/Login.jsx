export default function Login(){
    const login = () => {
        alert ("Guardardo :)")

    }
    return (
        <form action ="">
            <br /><br />
             {/* contenedores */}
            <div class="container text-center">
                <div class="row">  {/* clase fila */}
                    <h3>Gestión de paquetes - Login</h3>
                </div>
                <div class="row ">  {/* clase fila */}
                    <p><label htmlFor = ""> Registrarse</label></p>
                </div>
            
                <div class="row">  {/* clase fila */}
                    <div class="col -3 "> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3 ">
                        <label> Usuario</label> 
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
                        <label htmlFor = ""> Contraseña</label> 
                    </div>
                    <div class="col-3"> {/* columna 3 */}
                        <input type ="text" />
                    </div>
                    <div class="col -3"></div>{/* columna 4 */}
               
                </div>

                
            </div>

            
            <br /><br />
                <button onClick={login}>Login</button>
            <br /><br />
        </form>
    )
}
