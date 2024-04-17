import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";
import { selectFilters } from "../../redux/selectors";
import Button from "@mui/material/Button";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilters);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <section>
      <h2>Filter by status</h2>
      <>
        <Button
          variant="contained"
          color={currentFilter === statusFilters.all ? "secondary" : "primary"}
          type="button"
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          All
        </Button>
        <Button
          sx={{ ml: "5px" }}
          variant="contained"
          color={currentFilter === statusFilters.active ? "secondary" : "primary"}
          type="button"
          onClick={() => handleFilterChange(statusFilters.active)}
        >
          Active
        </Button>
        <Button sx={{ml: '5px'}}
          variant="contained"
          color={
            currentFilter === statusFilters.completed ? "secondary" : "primary"
          }
          type="button"
          onClick={() => handleFilterChange(statusFilters.completed)}
        >
          Completed
        </Button>
      </>
    </section>
  );
};

export default StatusFilter;
