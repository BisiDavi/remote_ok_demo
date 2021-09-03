import ReactMarkdown from "react-markdown";
import styles from "./card.module.css";

export default function MarkdownFormatter({ content }) {
  return (
    <ReactMarkdown className={styles.reactmarkdown}>
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
        .replaceAll("ð¡", " ")
        .replaceAll("ðº", " ")
        .replaceAll("âï¸", " ")
        .replaceAll("âï¸", " ")
        .replaceAll("ðï¸", " ")
        .replaceAll("ð¸", " ")
        .replaceAll("ð", " ")
        .replaceAll("", " ")
        .replaceAll("¢", " ")
        .replaceAll("â", " ")
        .replaceAll("ï", " ")
        .replaceAll("ð", " ")}
    </ReactMarkdown>
  );
}
//
//
