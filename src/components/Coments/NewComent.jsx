import React,{useState} from 'react'

const NewComent = (props) =>{
    const [comment,setComent] = useState('')
    const [name,setName] = useState('')
    
    function setNewComent(e){
        setComent(e.target.value)
        
    }

    function setNewName(e){
        setName(e.target.value)
    }

    function submit(e){
        
        e.preventDefault()
        
        props.onSubmit(comment,name)
        
    }

    return (
        <div>
            <form onSubmit = {submit}>
                <input className = "Name" placeholder = "Nome" onChange = {setNewName}></input>
                <input className = "Coment" placeholder = "Comentario" onChange = {setNewComent} ></input>
                <button type = "submit">Enviar</button>
            </form>
        </div>
    )

}

export default NewComent