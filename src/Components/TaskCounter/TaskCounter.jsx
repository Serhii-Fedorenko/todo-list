import { useSelector } from "react-redux";
import { selectTasksCount } from "../../redux/selectors";

const TaskCounter = () => {
  const count = useSelector(selectTasksCount);

  return (
    <section>
      <div>
        <h2>Tasks</h2>
        <p>Active: {count.active}</p>
        <p>Completed: {count.completed}</p>
      </div>
    </section>
  );
};

export default TaskCounter;
