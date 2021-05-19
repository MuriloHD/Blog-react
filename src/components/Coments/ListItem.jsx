import React from 'react'
//import '../../Assets/css/coment.css'
const ListItem = (props) =>{
    return (
        <div className = "exibir">
            <span> nome :</span>
            <input  value = {props.value2} />
            <span> Comentario :</span>
            <input  value = {props.value}/>
        </div>
    )

}

export default ListItem