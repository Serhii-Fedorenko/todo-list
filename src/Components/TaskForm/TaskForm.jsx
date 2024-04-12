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
      <Grid container spacing={1} alignItems="center" marginTop='20px'>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Enter task text..."
            variant="outlined"
            size="small"
            type="text"
            name="text"
          />
        </Grid>
        <Grid item xs={8}>
          <Button type="submit" variant="outlined" >
            Add task
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TaskForm;
