import ContentLoader from "react-content-loader";

export default function JobLoader({ theme }) {
  const backgroundThemeColor = theme === "dark" ? "#333" : "#ddd";
  return (
    <ContentLoader
      backgroundColor={backgroundThemeColor}
      foregroundColor={"#999"}
      height="100%"
      width="100%"
      speed={1}
    >
      <rect y="50" width="100%" height="100px" />
    </ContentLoader>
  );
}
