import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./card.module.css";

export default function MarkdownFormatter({ content }) {
  return (
    <ReactMarkdown className={styles.reactmarkdown} remarkPlugins={[remarkGfm]}>
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
    </ReactMarkdown>
  );
}
