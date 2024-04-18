import StatusFilter from "../StatusFilter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/selectors";

const AppBar = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // ! Переглянути всі атрибути компонентів

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <MuiAppBar position="fixed">
          <Toolbar>
            <Typography variant="h8" component="h4" sx={{ flexGrow: 1 }}>
              <TaskCounter />
            </Typography>
            <Typography variant="h8" component="h4" sx={{ flexGrow: 1 }}>
              {isLoading && !error && <b>Request in progress...</b>}
            </Typography>
            <StatusFilter />
          </Toolbar>
        </MuiAppBar>
      </Box>
    </header>
  );
};

export default AppBar;
