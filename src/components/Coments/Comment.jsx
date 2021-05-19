import React ,{useState} from 'react'

import ListItem from './ListItem'
import NewComent from './NewComent'
import '../../Assets/css/coment.css'
const Comment = () =>{
    const [tasks,setTasks] = useState([])
    
    function NewTask(coment,nome){
        const itensCopy =Array.from(tasks);
        itensCopy.push({id:tasks.length,value:coment,value2:nome})
        setTasks(itensCopy)
        
        
    }
    
    return(
        <div className = "posts">
            <NewComent onSubmit = {NewTask} ></NewComent>
            {tasks.map(({id,value,value2},index) => (
                
                <ListItem 
                key ={id} 
                value = {value}
                value2 = {value2}
                />
                
            ))}
        </div>
        
    )

}

export default Comment