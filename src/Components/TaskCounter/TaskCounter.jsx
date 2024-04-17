import { useSelector } from "react-redux";
import { selectTasksCount } from "../../redux/selectors";

const TaskCounter = () => {
  const count = useSelector(selectTasksCount);

  return (
    <section>
      <>
        <h2>Tasks</h2>
        <p>Active: {count.active}</p>
        <p>Completed: {count.completed}</p>
      </>
    </section>
  );
};

export default TaskCounter;
