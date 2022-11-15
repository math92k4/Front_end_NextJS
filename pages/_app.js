import "../styles/globals.css";
import Layout from "../components/Layout";

// This "App" is needed in getInitialProps
import App from "next/app";

function MyApp({ Component, pageProps, navData }) {
  return (
    <Layout navData={navData}>
      <Component {...pageProps} />
    </Layout>
  );
}

// getInitialProps should only be used inside app
// It's old and stupid - just blackbox it
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs");
  const navData = await res.json();
  return { ...appProps, navData };
};

export default MyApp;
