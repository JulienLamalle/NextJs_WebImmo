import "../styles/globals.scss";
import "../styles/features.scss";
import "../styles/buttons.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-awesome-slider/dist/styles.css";
import { AuthProvider } from "../auth/context";
import Nprogress from "nprogress";
import Router from "next/router";
import Head from "next/head";

Router.events.on("routeChangeStart", () => {
  Nprogress.start();
});
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
