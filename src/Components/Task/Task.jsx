import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/operations";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompleted = (task) => {
    dispatch(toggleCompleted(task));
  };
  return (
    <>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggleCompleted(task)}
      />
      <ListItemText>{task.text}</ListItemText>
      <IconButton
        edge="end"
        aria-label="comments"
        onClick={() => handleDeleteTask(task.id)}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export default Task;
