import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "./Components/AppBar/AppBar";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import { fetchTasks } from "./redux/operations";
import { teal, lime } from "@mui/material/colors";
import { selectError, selectIsLoading } from "./redux/selectors";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: lime,
  },
});

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // TODO Стилізувати індикатор завантаження

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar />
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
      </ThemeProvider>
    </>
  );
};

export default App;
