import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { selectFilters, selectTasks } from "../../redux/selectors";
import Task from "../Task/Task";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

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
    <List sx={{ width: "100%", maxWidth: 360 }}>
      {tasks &&
        getVisibleTasks().map((task) => (
          <ListItem key={task.id} sx={{ borderBottom: "1px solid" }}>
            <Task task={task} />
          </ListItem>
        ))}
    </List>
  );
};

export default TaskList;
