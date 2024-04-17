import StatusFilter from "../StatusFilter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AppBar = () => {

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <MuiAppBar position="static">
          <Toolbar>
            <Typography variant="h8" component="h4" sx={{ flexGrow: 1 }}>
              <TaskCounter />
            </Typography>
            <StatusFilter />
          </Toolbar>
        </MuiAppBar>
      </Box>
    </header>
  );
};

export default AppBar;
