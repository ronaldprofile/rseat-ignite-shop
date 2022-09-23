import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

import * as S from "../styles/pages/home";
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface HomeProps {
  products: Array<{
    id: string;
    name: string;
    price: string;
    imageUrl: string;
  }>;
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <S.HomePageContainer ref={sliderRef} className="keen-slider">
      <Head>
        <title>Ignite Shop | Home</title>
        <meta
          name="description"
          content="Discover our store and take advantage of the unmissable offers"
        />
      </Head>

      {products.map((product) => {
        return (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            // prefetch={false}
          >
            <S.Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} alt="" width={520} height={400} />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </S.Product>
          </Link>
        );
      })}
    </S.HomePageContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },

    revalidate: 60 * 60 * 2, // 2 hours
  };
};
