import Image from "next/image";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoIgniteShop from "../assets/logo.svg";
import * as S from "../styles/pages/app";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <Image
          src={logoIgniteShop.src}
          alt=""
          width={logoIgniteShop.width}
          height={logoIgniteShop.height}
        />
      </S.Header>
      
      <Component {...pageProps} />
    </S.Container>
  );
}

export default MyApp;
