
import {useEffect, useRef} from "react"
import { json } from "react-router-dom";

export default function ActualizacionOrdenes() {
   
    const fechaRef = useRef();
    const horaRef = useRef();
    const estadoRef = useRef();
    const largoRef = useRef();
    const anchoRef = useRef();
    const altoRef = useRef();
    const pesoRef = useRef();
    const dirRecogidaRef = useRef();
    const ciuRecogidaRef = useRef();
    const nomDestinatarioRef = useRef();
    const ccDestinatarioRef = useRef();
    const dirEntregaRef = useRef();
    const ciuEntregaRef = useRef();
    
    useEffect(() => {
        const id=window.location.hash.substring(1)
        //   document.title = `You clicked ${count} times`;
        // promesa para consumir una api los datos del servidor 
        fetch("http://localhost:8000/actualizacion/consultar",{
        
            //le decimos que le vamos a pasar un json
            headers: {"content-type": "application/json"},
            // el metodo
            method: "POST",
            body: JSON.stringify({id})
        }).then (res => res.json()) //then= respuesta de la promesa - res = variable que recibe la respuesta con un json, //cuando el ejecuta un json activa otra promesa por eso toca recibir otro then para que capture los datos en forma de json
          .then(res =>{               
            
            if (res.estado === "ok"){

                fechaRef.current.value= res.data[0].fecha;
                horaRef.current.value =res.data[0].hora;
                estadoRef.current.value =res.data[0].estado;
                largoRef.current.value = res.data[0].largo;
                anchoRef.current.value= res.data[0].ancho;
                altoRef.current.value = res.data[0].alto;
                pesoRef.current.value= res.data[0].peso;
                dirRecogidaRef.current.value = res.data[0].dirR;
                ciuRecogidaRef.current.value = res.data[0].ciuR;
                nomDestinatarioRef.current.value= res.data[0].nomD;
                ccDestinatarioRef.current.value = res.data[0].ccD;
                dirEntregaRef.current.value= res.data[0].dirD;
                ciuEntregaRef.current.value= res.data[0].ciuD;
           //  guardar en cada caja    
            }else {
                alert ("Error: No se puede realizar la consulta ")
            }
          })
         
   },[])
   
   
  

function actualizacionUpdate (){
    //captura datos
    const fecha = fechaRef.current.value;
    const hora=horaRef.current.value;
    const estado= estadoRef.current.value;
    const largo=largoRef.current.value;
    const ancho=anchoRef.current.value;
    const alto=altoRef.current.value;
    const peso=pesoRef.current.value;
    const dirR= dirRecogidaRef.current.value;
    const ciuR=ciuRecogidaRef.current.value;
    const nomD=nomDestinatarioRef.current.value;
    const ccD=ccDestinatarioRef.current.value;
    const dirD=dirEntregaRef.current.value;
    const ciuD=ciuEntregaRef.current.value;
     

    // promesa para consumir una api los datos del servidor 
   // fetch("http://127.0.0.1")
   fetch("http://localhost:8000/actualizacion/update",{
        //le decimos que le vamos a pasar un json
        headers: {"content-type": "application/json"},
        // el metodo
        method: "POST",
        //los valores
        body : JSON.stringify({fecha, hora, estado, largo, ancho, alto, peso, dirR, ciuR, nomD, ccD, dirD, ciuD})

      }).then (data => data.json()) //then= respuesta de la promesa - res = variable que recibe la respuesta con un json, //cuando el ejecuta un json activa otra promesa por eso toca recibir otro then para que capture los datos en forma de json
      .then(res =>{ 
        if (res.estado === "ok"){
            window.location.href = res.url;
             
        }else {

            alert ("Error: datos de prueba Actualizacion orden")
        }
    
      })
      .catch(err => alert(err))
      .finally() 
} 


   return (
        <form action="">
                   <br /><br />
             {/* contenedores */}
            <div class="container-fluid text-center">
                <div class="row">  {/* clase fila */}
                    <h3>Gestión de paquetes -Actualizacion de Órdenes (Recogida)</h3>
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 1 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                       
                    <div class="col -3"> <label >Fecha</label> </div> 
                    <div class="col -3"> <input ref ={fechaRef} type="date" size={10}/></div>
                    <div class="col-3 "> <label>Hora</label></div>
                    <div class="col -3"> <input ref ={horaRef} type="hour" size={10}/></div>
                    
                </div>
                <br />
                <div class="row">  {/* clase fila - fila estado */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col -3"> </div>   
                    <div class="col -3"> <label >Estado</label> </div> 
                    <div class="col -3"> <input ref ={estadoRef} type="text" size={10}/></div>
                    <div class="col -3"> </div>
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 2 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                       
                    <div class="col-sm"> <label>Largo</label> </div> 
                    <div class="col -3"> <input ref ={largoRef} type="text" size={5}/></div>
                    <div class="col-sm"> <label>Ancho</label></div>
                    <div class="col -3"> <input ref ={anchoRef} type="text" size={5}/></div>
                    <div class="col-sm"> <label>Alto</label> </div> 
                    <div class="col -3"> <input ref ={altoRef} type="text" size={5}/></div>
                    <div class="col-sm"> <label>Peso</label></div>
                    <div class="col -3"> <input ref ={pesoRef} type="text" size={5}/></div>
                    
                </div>
      
                <br />
                <br />
                <div class="row">  {/* clase fila - fila 3 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3"> <label >Dirección recogida</label> </div> 
                    <div class="col-3"> <input ref ={dirRecogidaRef} type ="text" /></div>
                    <div class="col-3"></div>
                    
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 4 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3 "> <label>Ciudad recogida</label></div>
                     <div class="col-3"> <input ref ={ciuRecogidaRef} type ="text" /></div>
                    <div class="col-3"></div>
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 5 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3"> <label >Nombre destinatario</label> </div> 
                    <div class="col-3"> <input ref ={nomDestinatarioRef} type ="text" /></div>
                    <div class="col-3"></div>
                    
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 6 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3 "> <label>Cédula/Nit destinatario</label></div>
                    <div class="col-3"> <input ref ={ccDestinatarioRef} type ="text" /></div>
                    <div class="col-3"></div>
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 7 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3"> <label >Dirección entrega</label> </div> 
                    <div class="col-3"> <input ref ={dirEntregaRef} type ="text" /></div>
                    <div class="col-3"></div>
                    
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 8 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3 "> <label>Ciudad entrega</label></div>
                    <div class="col-3"> <input ref ={ciuEntregaRef} type ="text" /></div>
                    <div class="col-3"></div>
                </div>
            </div>  

            <br /> <br />
            <button onClick={actualizacionUpdate} type="button">Actualizar Orden  </button>
            <br /> <br />
        </form>
    )
}

                  
        
    
