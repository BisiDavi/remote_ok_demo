import { useDispatch } from "react-redux";
import { JobAction } from "@stores/jobAction";

function WorldwideJobForm() {
  const dispatch = useDispatch();

  function displayWorldWideJobs() {
    dispatch(JobAction());
  }

  return (
    <>
      <div className="worldwideJobs">
        <h6>Remote jobs</h6>
        <span>
          <label>Only show worldwide jobs</label>
          <input
            onClick={displayWorldWideJobs}
            type="checkbox"
            className="font-weight-bold"
          />
        </span>
      </div>
      <style jsx>
        {`
          .worldwideJobs {
            display: flex;
            align-items: center;
            font-family: "Nunito", sans-serif;
            justify-content: space-between;
            margin: 10px 0px;
            font-size: 20px;
            height: 20px;
          }
          .worldwideJobs h6 {
            font-size: 20px;
          }
          @media (max-width: 500px) {
            .worldwideJobs h6,
            .worldwideJobs {
              font-size: 15px;
            }
          }
        `}
      </style>
    </>
  );
}

export default WorldwideJobForm;
