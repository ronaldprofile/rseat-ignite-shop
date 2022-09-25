import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import { CaretLeft, CaretRight } from "phosphor-react";
import { getAllProductsStripe } from "../hooks/get-all-products";
import "keen-slider/keen-slider.min.css";
import * as S from "../styles/pages/home";

interface HomeProps {
  products: Array<{
    id: string;
    name: string;
    price: string;
    imageUrl: string;
  }>;
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    dragSpeed: 0.8,
    drag: false,
    slides: {
      perView: 2,
      spacing: 48,
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },

    created() {
      setLoaded(true);
    },

    breakpoints: {
      "(max-width: 425px)": {
        slides: {
          perView: 1,
        },

        drag: true,
      },
    },
  });

  function prevSlide() {
    instanceRef.current?.prev();
  }

  function nextSlide() {
    instanceRef.current?.next();
  }

  return (
    <>
      <Head>
        <title>Ignite Shop | Home</title>
        <meta
          name="description"
          content="Discover our store and take advantage of the unmissable offers"
        />
      </Head>

      <S.HomePageContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <S.Product key={product.id} className="keen-slider__slide">
                <Image src={product.imageUrl} alt="" width={520} height={400} />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                </footer>
              </S.Product>
            </Link>
          );
        })}

        <S.Glass position="right-position">
          <S.SlidesControl>
            {loaded && instanceRef.current && (
              <S.ButtonControl
                onClick={nextSlide}
                disabled={currentSlide === 2}
              >
                <CaretRight color="#c4c4cc" />
              </S.ButtonControl>
            )}
          </S.SlidesControl>
        </S.Glass>

        {currentSlide !== 0 && (
          <S.Glass position="left-position">
            <S.SlidesControl>
              {loaded && instanceRef.current && (
                <S.ButtonControl onClick={prevSlide}>
                  <CaretLeft color="#c4c4cc" />
                </S.ButtonControl>
              )}
            </S.SlidesControl>
          </S.Glass>
        )}
      </S.HomePageContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { products } = await getAllProductsStripe();

  await new Promise((resolve) => setTimeout(() => resolve(""), 3000));

  return {
    props: {
      products,
    },

    revalidate: 60 * 60 * 2, // 2 hours
  };
};
