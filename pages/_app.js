import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { LayoutProvider } from "../hooks/LayoutContext";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutProvider>
      <div className="xl:container xl:mx-auto">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </LayoutProvider>
  );
}

export default MyApp;
