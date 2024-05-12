import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";
import {TextField, Button, Grid} from "@mui/material";

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
      <Grid
        container
        spacing={2}
        position="fixed"
        alignItems="center"
        justifyContent="center"
        top="100px"
        p='30px'
        sx={{backgroundColor: 'white'}}
        
      >
          <TextField
            sx={{ maxWidth: "50%", mr: 2 }}
            id="outlined-basic"
            label="Enter task text..."
            variant="outlined"
            size="small"
            type="text"
            name="text"
          />
          <Button type="submit" variant="outlined">
            Add task
          </Button>
      </Grid>
    </form>
  );
};

export default TaskForm;
