import "../styles/globals.scss";
import "../styles/features.scss";
import "../styles/buttons.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-awesome-slider/dist/styles.css";
import { AuthProvider } from "../auth/context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
