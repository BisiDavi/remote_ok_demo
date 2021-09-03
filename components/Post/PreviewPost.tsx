import { useSelector } from "react-redux";
import PreviewCard from "@components/Cards/PreviewCard";
import useTheme from "@hooks/useTheme";
import Button from "@components/Buttons";
import styles from "./PreviewPost.module.css";

export default function PreviewPost() {
  const { jobDetails } = useSelector((state) => state.postJob);
  const { dark } = useTheme();

  return (
    <>
      <div className={`previewpost ${styles.previewPost}`}>
        <PreviewCard dark={dark} data={jobDetails} />
        <div className="body">
          <div className="content">
            {jobDetails?.company && (
              <h1>
                {jobDetails?.company} is hiring a Remote {jobDetails?.position}{" "}
              </h1>
            )}
            {jobDetails?.howToApply && <p>{jobDetails?.description}</p>}
            <div className="toApply">
              <h3>How do you apply?</h3>
              {jobDetails?.howToApply && <p>{jobDetails?.howToApply}</p>}
              <a className={styles.appyUrl}>
                <Button disabled text="Apply for this job" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .content p {
            text-align: center;
          }
          .previewpost {
            font-family: "Nunito", sans-serif;
          }
          .previewpost h1 {
            font-size: 25px;
            margin: 20px auto;
          }
          .previewpost h3 {
            font-size: 20px;
            margin: 10px auto;
          }
        `}
      </style>
    </>
  );
}
