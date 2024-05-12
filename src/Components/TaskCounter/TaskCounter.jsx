import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTasksCount } from "../../redux/selectors";

const TaskCounter = () => {
  const count = useSelector(selectTasksCount);

  return (
    <section>
      <Typography fontSize={"4vmin"} component="h3">
        Tasks
      </Typography>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography fontSize={"2,5vmin"} component="p">
          Active: {count.active}
        </Typography>
        <Typography fontSize={"2,5vmin"} component="p" ml="20px">
          Completed: {count.completed}
        </Typography>
      </Grid>
    </section>
  );
};

export default TaskCounter;
