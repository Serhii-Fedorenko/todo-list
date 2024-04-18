import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";
import { selectFilters } from "../../redux/selectors";
import { Button, Typography } from "@mui/material";

const StatusFilter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilters);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <section>
      <Typography variant="h5" component="h4">Filter by status</Typography>
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
          color={
            currentFilter === statusFilters.active ? "secondary" : "primary"
          }
          type="button"
          onClick={() => handleFilterChange(statusFilters.active)}
        >
          Active
        </Button>
        <Button
          sx={{ ml: "5px" }}
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
