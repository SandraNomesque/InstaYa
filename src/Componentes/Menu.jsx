import { Link } from "react-router-dom";
export default function Menu() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav"  >
                    <ul className="navbar-nav">
                        
                        <li className="nav-item" style={{border: '1px solid black'}}>
                            <Link className="nav-link active" aria-current="page" to="/">InstaYa</Link>
                        </li>
                        <li className="nav-item" style={{border: '1px solid black'}}>
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item" style={{border: '1px solid black'}}>
                            <Link className="nav-link" to="/registroUsuarios">Registro Usuarios</Link>
                        </li>
                        <li className="nav-item" style={{border: '1px solid black'}}>
                            <Link className="nav-link" to="/listadoOrdenes">Listado de Órdenes</Link>
                        </li>
                        <li className="nav-item" style={{border: '1px solid black'}}>
                            <Link className="nav-link" to="/registroOrdenes">Registro Órdenes</Link>
                        </li>
                        <li className="nav-item" style={{border: '1px solid black'}}>
                            <Link className="nav-link" to="/actualizacionOrdenes">Actualización Órdenes</Link>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </nav>
    )
}