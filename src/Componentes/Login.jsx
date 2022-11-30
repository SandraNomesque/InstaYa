
import {Fragment, useRef} from "react"
import { Link } from "react-router-dom";



export default function Login(){
    
    const usuarioRef = useRef();
    const contraseñaRef = useRef();

    function login (){
    //captura usuario y password

    const usu = usuarioRef.current.value;
    const pass = contraseñaRef.current.value;
    

    // promesa para consumir una api los datos del servidor 
   // fetch("http://127.0.0.1")
    fetch("http://localhost:8000/login",{
    
        //le decimos que le vamos a pasar un json
        headers: {"content-type": "application/json"},
        // el metodo
        method: "POST",
        //los valores
        body : JSON.stringify({usu,pass})

      }).then (data => data.json()) //then= respuesta de la promesa - res = variable que recibe la respuesta con un json, //cuando el ejecuta un json activa otra promesa por eso toca recibir otro then para que capture los datos en forma de json
      .then(res =>{ 
        if (res.estado === "ok"){
            window.location.href = res.url;
        }else {

            alert ("Error: registro erroneo")
        }
    
      })
      .catch(err => alert(err))
      .finally() 
    } 

    return (
        <form action ="">
            <br /><br />
             {/* contenedores */}
            <div className="container text-center">
                <div className="row">  {/* clase fila */}
                    <h3>Gestión de paquetes - Login</h3>
                </div>
                <div className="row ">  {/* clase fila */}
                    <p> <Link to= {"/registrarse"}> Registrarse</Link></p>
                   
                </div>
            
                <div className="row">  {/* clase fila */}
                    <div className="col -3 "> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div className="col-3 ">
                        <label> Usuario</label> 
                    </div>
                    <div className="col-3 ">
                        <input ref ={usuarioRef} type="text"  />
                    </div>
                    <div className="col -3"></div>
                    
                </div>
                <br />
                <div className="row">  {/* clase fila */}
                <div className="col -3"> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div className="col -3"> {/* columna 2 */}
                        <label htmlFor = ""> Contraseña</label> 
                    </div>
                    <div className="col-3"> {/* columna 3 */}
                    <input input  ref ={contraseñaRef} type="password" />
                    </div>
                    <div className="col -3"></div>{/* columna 4 */}
               
                </div>

                
            </div>

            
            <br /><br />
                <button onClick={login} type="button">Login</button>
                
            <br /><br />
        </form>
    )
}

