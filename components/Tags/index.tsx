import useTheme from "@hooks/useTheme";
import colors from "@utils/colors";

export default function Tags({ tags }) {
  const { dark } = useTheme();
  const tagStyle = dark ? "dark" : "light";

  if (tags !== undefined && tags.length > 0) {
    const fourTags = tags.slice(0, 4);
    return fourTags.map((tag, index) => (
      <div key={`${tag}-${index}`}>
        <li className={`skilltag ${tagStyle}`}>{tag}</li>
        <style jsx>{`
          .light: {
            color: colors.black;
            border: 2px solid ${colors.black};
          }
          .dark: {
            color: colors.white;
            border: 2px solid ${colors.white};
          }
          .skilltag:hover {
            color: gray;
          }
          .skilltag {
            margin: 5px 5px;
            font-size: 12px;
            padding: 8px;
            font-family: "Nunito", sans-serif;
            border-radius: 5px;
            list-style: none;
          }
        `}</style>
      </div>
    ));
  }
  return null;
}
