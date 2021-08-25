import ContentLoader from "react-content-loader";

export default function LogoContentLoader() {
  return (
    <ContentLoader
      backgroundColor={"#333"}
      foregroundColor={"#999"}
      height={200}
      width="100%"
      speed={1}
      viewBox="0 0 380 70"
    >
      <rect x="80" y="40" rx="3" ry="3" width="100" height="100" />
    </ContentLoader>
  );
}
