import Image from "next/image";
import Link from "next/link";
import type { AppProps } from "next/app";
import { SkeletonTheme } from "react-loading-skeleton";

import { globalStyles } from "../styles/global";
import logoIgniteShop from "../assets/logo.svg";
import * as S from "../styles/pages/app";

globalStyles();
import "react-loading-skeleton/dist/skeleton.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <Link href="/">
          <Image
            src={logoIgniteShop.src}
            alt=""
            width={logoIgniteShop.width}
            height={logoIgniteShop.height}
          />
        </Link>
      </S.Header>

      <SkeletonTheme baseColor="#202024" highlightColor="#121214">
        <Component {...pageProps} />
      </SkeletonTheme>
    </S.Container>
  );
}

export default MyApp;
