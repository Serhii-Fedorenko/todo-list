import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/selectors";
import StatusFilter from "../StatusFilter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppBar = () => {
  const tasks = useSelector(selectTasks);

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <MuiAppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <TaskCounter tasks={tasks} />
            </Typography>
            <StatusFilter tasks={tasks} />
          </Toolbar>
        </MuiAppBar>
      </Box>
    </header>
  );
};

export default AppBar;
