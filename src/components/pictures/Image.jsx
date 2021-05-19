import React from 'react'


export default props =>{
    console.log(props.folder)
    return(
        <img className ="img" src = {props.folder} alt = "Foto do canditato" />
    )
}