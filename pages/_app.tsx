import { PersistGate } from "redux-persist/integration/react";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import Router from "next/router";
import store, { persistor } from "@stores/store";
import Loading from "@components/Loading/loading";
import "nprogress/nprogress.css";
import "../styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function start() {
      setLoading(true);
    }
    function end() {
      setLoading(false);
    }
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
