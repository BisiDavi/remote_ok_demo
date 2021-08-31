import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import Router from "next/router";
import store from "@stores/store";
import "../styles/globals.css";
import "nprogress/nprogress.css";
import Loading from "@components/Lazyload/loading";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = (url) => {
      let title = window.document.title;
      console.log("url", url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.on("routeChangeStart", start);
      Router.events.on("routeChangeComplete", end);
      Router.events.on("routeChangeError", end);
    };
  }, []);

  return (
    <Provider store={store}>
      {loading && <Loading />}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
