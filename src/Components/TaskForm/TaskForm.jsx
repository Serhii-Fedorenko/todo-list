import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addTask(form.elements.text.value))
    form.reset()
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <button type="submit">Add task</button>
    </form>
  );
};

export default TaskForm;
