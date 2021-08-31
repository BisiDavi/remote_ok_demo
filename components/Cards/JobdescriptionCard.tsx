import Button from "@components/Buttons";
import styles from "./card.module.css";
import MarkdownFormatter from "./MarkdownFormatter";

export default function JobdescriptionCard({ content }) {
  return (
    <>
      <div className={`${styles.description} job-description`}>
        <h4>
          Hire a Remote {content.position} at {content.company}{" "}
        </h4>
        <MarkdownFormatter content={content.description} />
        <a rel="noreferrer" href={content.apply_url} target="_blank">
          <Button text="apply" />
        </a>
      </div>
      <style jsx>
        {`
          .job-description a {
            margin: auto;
            display: flex;
            justify-content: center;
          }

          .job-description h4 {
            text-align: center;
            font-size: 20px;
            font-weight: bold;
          }
          .job-description {
            background-color: white;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
}
