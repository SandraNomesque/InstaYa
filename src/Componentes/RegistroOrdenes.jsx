export default function RegistroOrdenes() {
    const crearOrden = () => {
        alert ("Orden creada :)")

    }
    return (
        <form action="">
        <p></p>
           <p1>Gestión de paquetes - Registro Órdenes (Recogida)</p1>
           <p></p>
           <p>
                <label htmlFor =" "> Fecha </label>
                <input htmlFor ="date" />
                <label htmlFor=" "> Hora </label>
                <input htmlFor ="date" />
            </p>
            <p>
                <label htmlFor="">Largo</label>
                <input htmlFor ="float" />
                <label htmlFor="">Ancho</label>
                <input htmlFor ="Float" readOnly />
                <label htmlFor="">Alto</label>
                <input htmlFor ="Float" readOnly />
                <label htmlFor="">Peso</label>
                <input htmlFor ="Float" />
            </p>

            <p><label htmlFor="">Dirección recogida</label>
            <input htmlFor ="text" /></p>
            <p><label htmlFor="">Ciudad recogida</label>
            <input htmlFor ="text" /></p>
            <p><label htmlFor="">Nombre destinatario</label>
            <input htmlFor ="text" /></p>
            <p><label htmlFor="">Cédula/Nit destinatario</label>
            <input htmlFor ="text" /></p>
            <p><label htmlFor="">Dirección entrega</label>
            <input htmlFor ="text" /></p>
            <p><label htmlFor="">Ciudad entrega</label>
            <input htmlFor ="text" /></p>
            <button onClick={crearOrden}>Crear </button>
        </form>
    )
}