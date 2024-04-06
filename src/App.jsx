import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TaskList from "./Components/TaskList/TaskList";
import { fetchTasks } from "./redux/operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  
  return (
    <div>
      <TaskList />
    </div>
  );
};

export default App;
