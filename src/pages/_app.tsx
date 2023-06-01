import "antd/dist/antd.less";
import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "~/app/store";
import AppLayout from "~/components/layout/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}
