import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";
import { TextField, Button, Grid } from "@mui/material";
import Notiflix from "notiflix";

const quotes = [
  "“Goals are dreams with deadlines.” ― Diana Scharf",
  "“You must do the things you think you cannot do.” ― Eleanor Roosevelt",
  "“One of the secrets of life is to make stepping stones out of stumbling blocks.” — Jack Penn",
  `“You can, you should, and if you're brave enough to start, you will.” — Stephen King`,
  "“Winners are losers who got up and gave it one more try.” — Dennis DeYoung",
  "“A dream becomes a goal when action is taken toward its achievement.” — Bo Bennett",
  `"The question isn’t who’s going to let me; it’s who is going to stop me." —Ayn Rand`,
  `“You miss 100% of the shots you don't take.” — Wayne Gretzky`,
];

const TaskForm = () => {
  const dispatch = useDispatch();

  const getRandomQuote = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const trimmedText = form.elements.text.value.trim();
    if (trimmedText === "") {
      Notiflix.Notify.failure(
        getRandomQuote(quotes),
        { timeout: 6000, position: "right-bottom" }
      );
      return;
    }
    dispatch(addTask(trimmedText));
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
        p="30px"
        sx={{ backgroundColor: "white" }}
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
