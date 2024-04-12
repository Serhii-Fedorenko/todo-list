import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/selectors";
import StatusFilter from "../StatusFilter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";

const AppBar = () => {
  const tasks = useSelector(selectTasks);

  return (
    <header>
      <TaskCounter tasks={tasks} />
      <StatusFilter tasks={tasks} />
    </header>
  );
};

export default AppBar;
