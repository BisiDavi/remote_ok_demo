import ContentLoader from "react-content-loader";

export default function JobLoader({theme}) {
const backgroundThemeColor= theme === "dark" ? "#333" : "#ddd"
  return (
    <ContentLoader
      backgroundColor={backgroundThemeColor}
      foregroundColor={"#999"}
      height="100%"
      width="100%"
      speed={1}
      viewBox="0 0 380 70"
    >
      <rect y="40" width="100%" height="100%" />
    </ContentLoader>
  );
}
