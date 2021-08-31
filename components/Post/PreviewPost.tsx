import { useSelector } from "react-redux";
import MarkdownFormatter from "@components/Cards/MarkdownFormatter";
import PreviewCard from "@components/Cards/PreviewCard";
import useTheme from "@hooks/useTheme";
import { GreenButton } from "@components/Buttons";

export default function PreviewPost() {
  const { jobDetails } = useSelector((state) => state.postJob);
  const { themeStyle, dark } = useTheme();

  return (
    <>
      <div className="previewpost">
        <PreviewCard dark={dark} data={jobDetails} />
        <div className="body">
          <div className="content">
            {jobDetails?.company && (
              <h1 className="text-center">
                {jobDetails?.company} is hiring a Remote {jobDetails?.position}{" "}
              </h1>
            )}
            {jobDetails?.howToApply && (
              <MarkdownFormatter content={jobDetails?.description} />
            )}
            <div className="toApply">
              <h3 className="text-center">How do you apply?</h3>
              {jobDetails?.howToApply && (
                <MarkdownFormatter content={jobDetails?.howToApply} />
              )}
              <a
                target="_blank"
                className="text-decoration-none"
                rel="noreferrer"
                href={jobDetails?.apply_url}
              >
                <GreenButton
                  disabled
                  btnClassName="mx-auto my-4 d-flex"
                  text="Apply for this job"
                />
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
