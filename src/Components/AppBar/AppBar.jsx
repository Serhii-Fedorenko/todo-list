import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/selectors";

const AppBar = () => {
  const tasks = useSelector(selectTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <header>
      <section>
        <h2>Tasks</h2>
        <div>
            <p>Active: {count.active}</p>
            <p>Completed: {count.completed}</p>
        </div>
      </section>
      <section>
        <h2>Filter by status</h2>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
      </section>
    </header>
  );
};

export default AppBar;
