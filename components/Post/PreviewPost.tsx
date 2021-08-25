import { useSelector } from "react-redux";
import MarkdownFormatter from "@components/Cards/MarkdownFormatter";
import PreviewCard from "@components/Cards/PreviewCard";
import { GreenButton } from "@components/Buttons";

export default function PreviewPost() {
  const { jobDetails } = useSelector((state) => state.postJob);

  return (
    <div className="previewpost">
      <PreviewCard data={jobDetails} />
      <div className="body">
        <div className="content">
          <h1>
            {jobDetails?.company} is hiring a Remote {jobDetails?.position}{" "}
          </h1>
          {jobDetails?.howToApply && (
            <MarkdownFormatter content={jobDetails?.description} />
          )}
          <div className="toApply">
            <h3>How do you apply?</h3>
            {jobDetails?.howToApply && (
              <MarkdownFormatter content={jobDetails?.howToApply} />
            )}
            <a target="_blank" rel="noreferrer" href={jobDetails?.apply_url}>
              <GreenButton text="Apply for this job" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
