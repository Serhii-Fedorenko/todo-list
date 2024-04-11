import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/operations";
import { selectTasks } from "../../redux/selectors";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompleted = (task) => {
    dispatch(toggleCompleted(task));
  };
  
  return (
    <ul>
      {tasks &&
        tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleCompleted(task)}
            />
            <p>{task.text}</p>
            <button type="button" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
