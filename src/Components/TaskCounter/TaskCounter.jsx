import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTasksCount } from "../../redux/selectors";

const TaskCounter = () => {
  const count = useSelector(selectTasksCount);

  return (
    <section>
      <Typography variant="h4" component="h3">
        Tasks
      </Typography>
      <Grid container>
        <Typography variant="h7" component="p">
          Active: {count.active}
        </Typography>
        <Typography variant="h7" component="p" ml="20px">
          Completed: {count.completed}
        </Typography>
      </Grid>
    </section>
  );
};

export default TaskCounter;
