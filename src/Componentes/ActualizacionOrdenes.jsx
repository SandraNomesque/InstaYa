
export default function ActualizacionOrdenes() {
    const actualizacionOrden = () => {
        alert ("Orden actualizada :)")

    }
    return (
        <form action="">
        <br /><br />
        <h3>Gestión de paquetes -Actualizacion de Órdenes (Recogida)</h3>
        <br /><br />
           
                <label htmlFor =" "> Fecha </label>
                <input htmlFor ="date" />
                <label htmlFor=" "> Hora </label>
                <input htmlFor ="date" /> 
                <br />
                <label htmlFor=" "> Estado </label>
                <input htmlFor ="date" />
                <br />
          
                <label htmlFor="">Largo</label>
                <input htmlFor ="float" />
                <label htmlFor="">Ancho</label>
                <input htmlFor ="Float" readOnly /><br />
                <label htmlFor="">Alto</label>
                <input htmlFor ="Float" readOnly />
                <label htmlFor="">Peso</label>
                <input htmlFor ="Float" />
            
            <br />
            <br />
            <div>
               
                    <label htmlFor="">Dirección recogida</label><br />
                    <input htmlFor ="text" /> <br />
                    <label htmlFor="">Ciudad recogida</label><br />
                    <input htmlFor ="text" />   <br />   
                    <label htmlFor="">Nombre destinatario</label><br />
                    <input htmlFor ="text" /><br />
                    <label htmlFor="">Cédula/Nit destinatario</label><br />
                    <input htmlFor ="text" /> <br />
                    <label htmlFor="">Dirección entrega</label><br />
                    <input htmlFor ="text" /><br />
                    <label htmlFor="">Ciudad entrega</label><br />
                    <input htmlFor ="text" />
              
            </div>
            <br /> <br />
            <button onClick={actualizacionOrden}>Actualizar Orden  </button>
            <br /> <br />
        </form>
    )
   }