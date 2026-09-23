const Task = (props) => {
    
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : props.priority === 'high'
                    ? '#ff9999'
                    : props.priority === 'medium'
                    ? '#ffcc66'
                    : '#99cc99'}}
                    >
           <p>{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority">{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

        </div>
    )
}

export default Task;