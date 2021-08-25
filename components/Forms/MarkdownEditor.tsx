import Yamde from "yamde";

export default function MarkdownEditor({ content, ...props }) {
  return (
    <>
      <div className="markdownEditor">
        <h3>{content.label}</h3>
        <Yamde
          value={props.values[content.name]}
          handler={props.handleChange(content.name)}
          theme="light"
        />
      </div>
      <style jsx>
        {`
          .markdownEditor {
            display: flex;
            flex-direction: column;
          }
          .markdownEditor h3 {
            font-size: 16px;
            font-weight: 800;
            font-family: "Nunito";
          }
          @media (max-width: 768px) {
            .markdownEditor h3 {
              font-size: 14px;
              margin: 20px 0px;
            }
          }
        `}
      </style>
    </>
  );
}
