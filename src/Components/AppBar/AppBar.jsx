import { useDispatch, useSelector } from "react-redux";
import { selectFilters, selectTasks } from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";

const AppBar = () => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

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
          <button
            type="button"
            onClick={() => handleFilterChange(statusFilters.all)}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange(statusFilters.active)}
          >
            Active
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange(statusFilters.completed)}
          >
            Completed
          </button>
        </div>
      </section>
    </header>
  );
};

export default AppBar;
