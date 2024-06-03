import React,{useState} from 'react'

function ToDoList(){
    const [tasks,setTasks] = useState(["FEED ME "])

    function handleAddTask(){
        const newTask = document.getElementById('task-id').value;
        if(!tasks.includes(newTask) && newTask) setTasks(tasks=>([...tasks,newTask]));
        document.getElementById('task-id').value = ""
        
    }

    function handleRemoveTask(i){
        setTasks(tasks.filter((_,index)=>i!=index))
    }

    function handleMoveUpTask(i){
        if(i!=0){
        [tasks[i],tasks[i-1]] = [tasks[i-1],tasks[i]];
        setTasks(tasks=>[...tasks])
        }
    }

    function handleMoveDownTask(i){
        if(i!=tasks.length-1){
            [tasks[i],tasks[i+1]] = [tasks[i+1],tasks[i]];
            setTasks(tasks=>[...tasks])
            }
    }
        
    

    return(
    <div className="container">
        <h1>To-Do-List</h1>
        <input type="text" id='task-id' placeholder='Enter new task'/>
        <button id="submit" style={{margin:"0px",borderRadius:"0px"}} onClick={handleAddTask}>Add new task</button>
        <ul>
            {
                tasks.map((task,index)=>
                    <li key={index} >
                        <span>{task}</span>
                        <button  onClick={()=>handleRemoveTask(index)}>Remove</button>
                        <button style={{backgroundColor:"blue"}} onClick={()=>handleMoveUpTask(index)}>👆</button>
                        <button style={{backgroundColor:"blue"}} onClick={()=>handleMoveDownTask(index)}>👇</button>
                    </li>)
            }
        </ul>
    </div>

    );
}

export default ToDoList