import { useDispatch } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";

const StatusFilter = ({ tasks }) => {
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
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
  );
};

export default StatusFilter;
