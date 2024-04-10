import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/selectors";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  return (
    <ul>
      {tasks &&
        tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} />
            <p>{task.text}</p>
            <button type="button">Delete</button>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
