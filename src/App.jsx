import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "./redux/operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return <div>TODO List</div>;
};

export default App;
