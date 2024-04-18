import StatusFilter from "../StatusFilter/StatusFilter";
import TaskCounter from "../TaskCounter/TaskCounter";
import MuiAppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography, Grid } from "@mui/material";
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
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              p="10px"
            >
              <TaskCounter />
              <Typography
                variant="h8"
                component="p"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                {isLoading && !error && <b>Request in progress...</b>}
              </Typography>
              <StatusFilter />
            </Grid>
          </Toolbar>
        </MuiAppBar>
      </Box>
    </header>
  );
};

export default AppBar;
