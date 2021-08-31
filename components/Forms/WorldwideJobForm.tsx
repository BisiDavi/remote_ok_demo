import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { JobAction } from "@stores/jobAction";

function WorldwideJobForm() {
  const dispatch = useDispatch();

  function displayWorldWideJobs() {
    dispatch(JobAction());
  }

  return (
    <Form>
      <Form.Check
        onClick={displayWorldWideJobs}
        type="checkbox"
        className="font-weight-bold"
        label="Only show worldwide jobs"
      />
    </Form>
  );
}


export default WorldwideJobForm;