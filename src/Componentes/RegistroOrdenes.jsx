export default function RegistroOrdenes() {
    const crearOrden = () => {
        alert ("Orden creada :)")

    }
    return (
        <form action="">
       <br /><br />
             {/* contenedores */}
            <div class="container-fluid text-center">
                <div class="row">  {/* clase fila */}
                    <h3>Gestión de paquetes - Registro Órdenes (Recogida)</h3>
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 1 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                       
                    <div class="col -3"> <label >Fecha</label> </div> 
                    <div class="col -3"> <input type ="text" size={10}/></div>
                    <div class="col-3 "> <label>Hora</label></div>
                    <div class="col -3"> <input type ="text" size={10} /></div>
                    
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 2 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                       
                    <div class="col-sm"> <label>Largo</label> </div> 
                    <div class="col-sm"> <input type ="text" size={10} /></div>
                    <div class="col-sm"> <label>Ancho</label></div>
                    <div class="col-sm"> <input type ="text" size={10} /></div>
                    <div class="col-sm"> <label>Alto</label> </div> 
                    <div class="col-sm"> <input type ="text" size={10} /></div>
                    <div class="col-sm"> <label>Peso</label></div>
                    <div class="col-sm"> <input type ="text" size={10} /></div>
                    
                </div>
                <br />
                <br />
                <div class="row">  {/* clase fila - fila 3 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3"> <label >Dirección recogida</label> </div> 
                    <div class="col-3"> <input type ="text" /></div>
                    <div class="col-3"></div>
                    
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 4 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3 "> <label>Ciudad recogida</label></div>
                    <div class="col-3"> <input type ="text"  /></div>
                    <div class="col-3"></div>
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 5 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3"> <label >Nombre destinatario</label> </div> 
                    <div class="col-3"> <input type ="text" /></div>
                    <div class="col-3"></div>
                    
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 6 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3 "> <label>Cédula/Nit destinatario</label></div>
                    <div class="col-3"> <input type ="text"  /></div>
                    <div class="col-3"></div>
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 7 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3"> <label >Dirección entrega</label> </div> 
                    <div class="col-3"> <input type ="text" /></div>
                    <div class="col-3"></div>
                    
                </div>
                <br />
                <div class="row">  {/* clase fila - fila 8 */}
                    {/* clase columna y cada columna esta representada por  "<div> ... </div>" */}
                    <div class="col-3"></div>
                    <div class="col-3 "> <label>Ciudad entrega</label></div>
                    <div class="col-3"> <input type ="text"  /></div>
                    <div class="col-3"></div>
                </div>
            </div>   
           
            <br /> <br />
            <button onClick={crearOrden}>Crear </button>
            <br /> <br />
        </form>
    )
}