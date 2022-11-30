import {Fragment, useRef} from "react"
import { Link } from "react-router-dom";

export default function RegistroUsuarios(){
    
    const nombreRef = useRef();
    const usuarioRef = useRef();
    const contraseñaRef = useRef();
    const correoRef = useRef();
    //const [exito, setExito] = useState(false);

    // funcion para enviar los datos al servidor 
    function registroUsuarios (){
        //captura usuario y password
        const nom = nombreRef.current.value;
        const usu = usuarioRef.current.value;
        const pass = contraseñaRef.current.value;
        const email = correoRef.current.value;

        // promesa para consumir una api los datos del servidor 
       // fetch("http://127.0.0.1")
        fetch("http://localhost:8000/registroUsuarios/guardar",{
        
            //le decimos que le vamos a pasar un json
            headers: {"content-type": "application/json"},
            // el metodo
            method: "POST",
            //los valores
            body : JSON.stringify({nom ,usu,pass,email})

          }).then (data => data.json()) //then= respuesta de la promesa - res = variable que recibe la respuesta con un json, //cuando el ejecuta un json activa otra promesa por eso toca recibir otro then para que capture los datos en forma de json
          .then(res =>{ 
            if (res.estado === "ok"){
                window.location.href = res.url;
            }else {

                alert ("Error: datos de prueba")
            }
        
          })
          .catch(err => alert(err))
          .finally() 
   } 
  // <Fragment> = componente generico que puede renderizar todo el leguaje html
    return (
       <Fragment>
        <form>
            <br /><br />
             {/* contenedores */}
            <div className="container text-center">
                <div className="row">  {/* clase fila */}
                    <h3>Gestión de paquetes - Registro Usuarios</h3>
                </div>
                <br />
                <div className="row ">  {/* clase fila */}
                    <p> <Link to= {"/loguearse"}> Login</Link></p>
                </div>
                <div className="row">  {/* clase fila */}
                    <div className="col-3 "> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div className="col-3 ">
                        <label >Nombre</label> 
                    </div>
                    <div className="col-3 ">
                         <input ref ={nombreRef} type="text"  />
                    </div>
                    <div className="col-3 ">
                </div>
                    
                </div>
                <br />
                <div className="row">  {/* clase fila */}
                <div className="col -3"> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div className="col -3"> {/* columna 2 */}
                        <label htmlFor = "">Usuario</label> 
                    </div>
                    <div className="col-3"> {/* columna 3 */}
                         <input ref ={usuarioRef} type="text"  />
                        
                    </div>
                    <div className="col -3"></div>{/* columna 4 */}
               
                </div>
                <br />
                <div className="row">  {/* clase fila */}
                    <div className="col -3 "> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div className="col-3 ">
                        <label> Contraseña</label> 
                    </div>
                    <div className="col-3 ">
                        <input input  ref ={contraseñaRef} type="password" />
                       {/* <input type ="text" /> */}
                    </div>
                    <div className="col -3"></div>
                    
                </div>
                <br />
                <div className="row">  {/* clase fila */}
                <div className="col -3"> </div> {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div className="col -3"> {/* columna 2 */}
                        <label htmlFor = ""> Correo</label> 
                    </div>
                    <div className="col-3"> {/* columna 3 */}
                         <input ref ={correoRef} type="email"  />
                    </div>
                    <div className="col -3"></div>{/* columna 4 */}
               
                </div>
            </div>
            <br /> <br />
                <button onClick={registroUsuarios} type="button" >Crear</button>
            <br /> <br />
        </form>
        </Fragment> 
    )
}