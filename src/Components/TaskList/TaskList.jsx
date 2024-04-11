import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { deleteTask, toggleCompleted } from "../../redux/operations";
import { selectFilters, selectTasks } from "../../redux/selectors";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompleted = (task) => {
    dispatch(toggleCompleted(task));
  };

    const getVisibleTasks = () => {
      switch (filter) {
        case statusFilters.active:
          return tasks.filter((task) => !task.completed);
        case statusFilters.completed:
          return tasks.filter((task) => task.completed);
        default:
          return tasks;
      }
    };

//   const getVisibleTasks = () => {
//     return tasks.filter((task) => !task.completed);
//   };

  return (
    <ul>
      {tasks &&
        getVisibleTasks().map((task) => (
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
