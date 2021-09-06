import useTheme from "@hooks/useTheme";
import colors from "@utils/colors";

export default function Tags({ tags }) {
  const { dark } = useTheme();
  const tagStyle = dark ? "dark" : "light";

  if (tags !== undefined && tags.length > 0) {
    const fourTags = tags.slice(0, 4);
    return (
      <>
        {typeof tags === "object"
          ? fourTags.map((tag, index) => (
              <div key={`${tag}-${index}`}>
                <li className={`skilltag ${tagStyle}`}>{tag}</li>
              </div>
            ))
          : tags
              .split(",")
              .slice(0, 3)
              .map((item, index) => (
                <div key={index} className={`role-tag ${tagStyle}`}>
                  {item}
                </div>
              ))}
        <style jsx>{`
          .light {
            color: ${colors.black};
            border: 2px solid ${colors.black};
          }
          .dark {
            color: ${colors.white};
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
          .role-tag {
            margin: 0px 5px;
            padding: 0.33em;
            border-radius: 6px;
          }
          @media (max-width: 768px) {
            .skilltag {
              font-size: 9px;
              padding: 5px;
            }
          }
        `}</style>
      </>
    );
  }
  return null;
}
