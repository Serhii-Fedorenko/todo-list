import { useSelector } from "react-redux";
import { selectVisibleTasks } from "../../redux/selectors";
import Task from "../Task/Task";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {tasks &&
          tasks.map((task) => (
            <ListItem key={task.id} sx={{ borderBottom: "1px solid" }}>
              <Task task={task} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default TaskList;
