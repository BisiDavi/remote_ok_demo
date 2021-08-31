import useTheme from "@hooks/useTheme";
import colors from "@utils/colors";

export default function Tags({ tags }) {
  const { dark } = useTheme();
  const tagStyle = dark ? "dark" : "light";

  if (tags !== undefined && tags.length > 0) {
    const fourTags = tags.slice(0, 4);
    return fourTags.map((tag, index) => (
      <>
        <li
          className={`skilltag ${tagStyle} list-unstyled m-2 btn btn-outline-dark h-25`}
          key={`${tag}-${index}}`}
        >
          {tag}
        </li>
        <style jsx>{`
          .light: {
            color: colors.black;
            border: 2px solid ${colors.black};
          }
          .dark: {
            color: colors.white;
            border: 2px solid ${colors.white};
          }
          .skilltag {
            font-size: 10px;
            padding: 2px;
            margin: 3px;
          }
        `}</style>
      </>
    ));
  }
  return null;
}