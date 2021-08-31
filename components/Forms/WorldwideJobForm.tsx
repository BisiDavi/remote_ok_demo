import { useDispatch } from "react-redux";
import { JobAction } from "@stores/jobAction";

function WorldwideJobForm() {
  const dispatch = useDispatch();

  function displayWorldWideJobs() {
    dispatch(JobAction());
  }

  return (
    <div>
      <label>Only show worldwide jobs</label>
      <input
        onClick={displayWorldWideJobs}
        type="checkbox"
        className="font-weight-bold"
      />
    </div>
  );
}

export default WorldwideJobForm;
