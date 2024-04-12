import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/operations";


const Task = ({ task }) => {
    const dispatch = useDispatch()

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompleted = (task) => {
    dispatch(toggleCompleted(task));
  };
  return (
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
  );
};

export default Task;
