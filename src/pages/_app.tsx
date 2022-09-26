import type { AppProps } from "next/app";
import { CartProvider } from "../context/Cart";
import { Header } from "../components/Header";
import { SkeletonTheme } from "react-loading-skeleton";

import { globalStyles } from "../styles/global";
import * as S from "../styles/pages/app";

globalStyles();
import "react-loading-skeleton/dist/skeleton.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <S.Container>
        <Header />

        <SkeletonTheme baseColor="#202024" highlightColor="#121214">
          <Component {...pageProps} />
        </SkeletonTheme>
      </S.Container>
    </CartProvider>
  );
}

export default MyApp;
