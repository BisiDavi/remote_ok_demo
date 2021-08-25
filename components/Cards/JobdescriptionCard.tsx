import { RedButton } from "@components/Buttons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./card.module.css";

export default function JobdescriptionCard({ content }) {
  return (
    <div className={`${styles.description} container px-5 py-3 bg-white`}>
      <h4 className="text-left font-weight-bold my-3">
        Hire a Remote {content.position} at {content.company}{" "}
      </h4>
      <ReactMarkdown
        className={styles.reactmarkdown}
        remarkPlugins={[remarkGfm]}
      >
        {content.description
          .replaceAll("â", "'")
          .replaceAll("Â", " ")
          .replaceAll("â¯", " ")
          .replaceAll("â¢", " ")
          .replaceAll("â ", " ")
          .replaceAll("â", " ")
          .replaceAll("â", " ")
          .replaceAll("ð", " ")
          .replaceAll("â¤ï¸", " ")
          .replaceAll("âï¸", " ")
          .replaceAll("ð", " ")
          .replaceAll("â", " ")
          .replaceAll("âï¸", " ")
          .replaceAll("âï¸", " ")}
      </ReactMarkdown>
      <a rel="noreferrer" href={content.apply_url} target="_blank">
        <RedButton
          text="apply"
          btnClassName="w-75 mx-auto d-flex justify-content-center btn-danger text-white font-weight-bold"
        />
      </a>
    </div>
  );
}
