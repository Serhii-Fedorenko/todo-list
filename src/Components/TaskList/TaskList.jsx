import {useSelector} from 'react-redux'

const TaskList = () => {
    const tasks = useSelector(state => state.tasks.items)
    return ( <ul>
        {tasks && tasks.map(task => <li key={task.id}>
            <input type='checkbox' checked={task.completed}/>
            <p>{task.text}</p>
            <button type='button'>Delete</button>
        </li>)}
    </ul> );
}
 
export default TaskList;