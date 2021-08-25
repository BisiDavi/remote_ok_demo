import { RedButton } from "@components/Buttons";
import styles from "./card.module.css";
import MarkdownFormatter from "./MarkdownFormatter";

export default function JobdescriptionCard({ content }) {
  return (
    <div className={`${styles.description} container px-5 py-3 bg-white`}>
      <h4 className="text-left font-weight-bold my-3">
        Hire a Remote {content.position} at {content.company}{" "}
      </h4>
      <MarkdownFormatter content={content.description} />
      <a rel="noreferrer" href={content.apply_url} target="_blank">
        <RedButton
          text="apply"
          btnClassName="w-75 mx-auto d-flex justify-content-center btn-danger text-white font-weight-bold"
        />
      </a>
    </div>
  );
}
