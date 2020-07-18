import { AppPropsType } from "next/dist/next-server/lib/utils";

import "./styles/layout.css";

export default function App({ Component, pageProps, router }: AppPropsType) {
  return <Component {...pageProps} key={router.route} />;
}
