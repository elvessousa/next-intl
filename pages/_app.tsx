import { AppPropsType } from "next/dist/next-server/lib/utils";
import { LanguageProvider } from "../intl/LanguageProvider";

import "./styles/layout.css";

export default function App({ Component, pageProps, router }: AppPropsType) {
  return (
    <LanguageProvider>
      <Component {...pageProps} key={router.route} />
    </LanguageProvider>
  );
}
