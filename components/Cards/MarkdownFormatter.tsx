// import ReactMarkdown from "react-markdown";
import styles from "./card.module.css";

export default function JobDescriptionFormatter({ content }) {
  return (
    <div className={styles.reactmarkdown}>
      {content
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
    </div>
  );
}
