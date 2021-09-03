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
              <h1 className="text-center">
                {jobDetails?.company} is hiring a Remote {jobDetails?.position}{" "}
              </h1>
            )}
            {jobDetails?.howToApply && <p>{jobDetails?.description}</p>}
            <div className="toApply">
              <h3 className="text-center">How do you apply?</h3>
              {jobDetails?.howToApply && <p>{jobDetails?.howToApply}</p>}
              <a
                target="_blank"
                className={styles.appyUrl}
                rel="noreferrer"
                href={jobDetails?.apply_url}
              >
                <Button disabled text="Apply for this job" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
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
