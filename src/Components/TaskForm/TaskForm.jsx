import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; 

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2} alignItems="center" justifyContent='center' mt='20px'>
          <Grid item xs={4}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Enter task text..."
              variant="outlined"
              size="small"
              type="text"
              name="text"
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="outlined">
              Add task
            </Button>
          </Grid>
        </Grid>
      </form>
  );
};

export default TaskForm;
