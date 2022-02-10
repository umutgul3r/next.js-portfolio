import "../styles/globals.css";
import { wrapper } from "../redux/Store";

import Layout from "./../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
