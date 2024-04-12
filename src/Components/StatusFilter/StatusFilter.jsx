import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";
import Button from "@mui/material/Button";
import { selectFilters } from "../../redux/selectors";

const StatusFilter = ({ tasks }) => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilters)

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <section>
      <h2>Filter by status</h2>
      <div>
        <Button
          variant="outlined"
          color={currentFilter === statusFilters.all ? 'error' : 'white'}
          type="button"
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          All
        </Button>
        <Button
          variant="outlined"
          color={currentFilter === statusFilters.active ? 'error' : 'white'}
          type="button"
          onClick={() => handleFilterChange(statusFilters.active)}
        >
          Active
        </Button>
        <Button
          variant="outlined"
          color={currentFilter === statusFilters.completed ? 'error' : 'white'}
          type="button"
          onClick={() => handleFilterChange(statusFilters.completed)}
        >
          Completed
        </Button>
      </div>
    </section>
  );
};

export default StatusFilter;
