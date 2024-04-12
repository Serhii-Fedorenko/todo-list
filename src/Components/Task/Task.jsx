import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/operations";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompleted = (task) => {
    dispatch(toggleCompleted(task));
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggleCompleted(task)}
      />
      <p>{task.text}</p>
      <button type="button" onClick={() => handleDeleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
