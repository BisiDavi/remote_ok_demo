import Head from "next/head";
import { Header, Footer } from "@imports/.";

const Layout = ({ pageTitle, children }: any): JSX.Element => {
  return (
    <div className="layout">
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="remote demo" />
        <meta name="apple-mobile-web-app-title" content="remote/ demo" />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
