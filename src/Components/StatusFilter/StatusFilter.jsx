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
      <Typography fontSize={'3vmin'} component="h4">Filter by status</Typography>
      <>
        <Button
          variant="contained"
          color={currentFilter === statusFilters.all ? "secondary" : "primary"}
          type="button"
          onClick={() => handleFilterChange(statusFilters.all)}
        >
          <Typography fontSize={'2vmin'}>All</Typography>
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
          <Typography fontSize={'2vmin'}>Active</Typography>
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
          <Typography fontSize={'2vmin'}>Completed</Typography>
        </Button>
      </>
    </section>
  );
};

export default StatusFilter;
