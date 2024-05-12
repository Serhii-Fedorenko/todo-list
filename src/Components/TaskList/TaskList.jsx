import { useSelector } from "react-redux";
import { selectVisibleTasks } from "../../redux/selectors";
import Task from "../Task/Task";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);
  return (
    <Box
      component={Paper}
      width="fit-content"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt="190px"
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        padding: 5,
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
      }}
    >
      <List sx={{ width: "100%" }}>
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
