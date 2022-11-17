export default function ListadoOrdenes(){
    return (
        <form action ="">
             <br />
            <h3>Gestión de paquetes - Listado de Órdenes</h3>
            <br />
            <p><label htmlFor = ""> Crear Orden </label></p>
            

            <table class="table">
            <thead>
                <tr>
                <th scope="col"># Servicio </th>
                <th scope="col">Fecha</th>
                <th scope="col">Ciudad Entrega</th>
                <th scope="col">Direccion Entrega</th>
                <th scope="col">Estado</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>01/01/2021</td>
                <td>Santa Marta</td>
                <td>Calle 1 # 2-3</td>
                <td>Guardado</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>01/01/2021</td>
                <td>Barranquilla</td>
                <td>Calle 4 # 5-6</td>
                <td>Cancelado</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>01/01/2021</td>
                <td>Cartagena</td>
                <td>Calle 7 # 8-9</td>
                <td>Cumplido</td>
                </tr>
                <tr>
                <th scope="row">4</th>
               
                </tr>
               

            </tbody>
            </table>

        </form>
    ) 
   
}
