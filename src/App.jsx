import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "./Components/AppBar/AppBar";
import TaskForm from "./Components/TaskForm/TaskForm";
import TaskList from "./Components/TaskList/TaskList";
import { fetchTasks } from "./redux/operations";
import { teal, lime } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: lime
  },
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar />
        <TaskForm />
        <TaskList />
      </ThemeProvider>
    </div>
  );
};

export default App;
