import {useEffect, useState} from "react"
import { Link } from "react-router-dom"

export default function ListadoOrdenes(){
  
   //crea una variable estado para guardar la informacion 
    const [listado, setListado]  = useState([])

    //useEffect= enlaza una funcion con una variable 
    useEffect(() => {
        //   document.title = `You clicked ${count} times`;
        // promesa para consumir una api los datos del servidor 
        fetch("http://localhost:8000/listadoOrdenes/list",{
        
            //le decimos que le vamos a pasar un json
            headers: {"content-type": "application/json"},
            // el metodo
            method: "POST",
        }).then (res => res.json()) //then= respuesta de la promesa - res = variable que recibe la respuesta con un json, //cuando el ejecuta un json activa otra promesa por eso toca recibir otro then para que capture los datos en forma de json
          .then(res =>{               
            
            if (res.estado === "ok"){
                setListado(res.data)
                console.log(listado);
            }else {
                alert ("Error: No se puede realizar la consulta ")
            }
          })
         
   },[])
          
    return (
        <form action ="">
             <br />
            <h3>Gestión de paquetes - Listado de Órdenes</h3>
            <br />
            
            <div className="row ">  {/* clase fila */}
                    <p> <Link to= {"/crearOrden"}> Crear Orden</Link></p>
            </div>

            <table className="table">
            <thead>
                <tr>
                <th scope="col">NumServicio </th>
                <th scope="col">Fecha</th>
                <th scope="col">Ciudad Entrega</th>
                <th scope="col">Direccion Entrega</th>
                <th scope="col">Estado</th>

                </tr>
            </thead>
            <tbody>

                {
                    listado.map(p => <tr key={p._id}>
                        <td>{p._id}</td>
                        <td>{p.fecha}</td>
                        <td>{p.ciuD}</td>
                        <td>{p.dirD}</td>
                        <td>{p.estado}</td>
                        <Link to= {'/actualizacionOrdenes/#'+p._id}> Actualizar</Link>
                    </tr>)

                     } 
                
            
            </tbody>
            </table>

        </form>
    )
}
