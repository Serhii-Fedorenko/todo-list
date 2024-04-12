import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { selectFilters, selectTasks } from "../../redux/selectors";
import Task from "../Task/Task";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilters);

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

  return (
    <ul>
      {tasks &&
        getVisibleTasks().map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
