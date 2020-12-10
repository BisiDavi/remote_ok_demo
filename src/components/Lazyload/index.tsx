import LazyLoad from "react-lazyload";

export const LazyloadCard = ({ children }) => {
  return (
    <LazyLoad height={120} once>
      {children}
    </LazyLoad>
  );
};

export const LazyloadImg = ({ children }) => {
  return (
    <LazyLoad height={60} once>
      {children}
    </LazyLoad>
  );
};
