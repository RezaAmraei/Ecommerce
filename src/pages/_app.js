import react from "react";
import { Layout } from "@/componenets";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default App;
