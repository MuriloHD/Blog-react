import React from 'react'
import {Link} from  'react-router-dom'
import '../../Assets/css/menu.css'
export default props => {

    return (
        <div className = "cabecalho">
            <h1>HotsBlog.com</h1>
                <nav>
                    <Link to= "/">Perfil</Link>
                    <Link to = "/coments">Comentarios</Link>
                </nav>
        </div>
    )

}

