import { useState } from "react";
import Yamde from "yamde";

export default function MarkdownEditor() {
  const [text, setText] = useState("");
  return <Yamde value={text} handler={setText} theme="light" />;
}
