import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

import { getProductByIdStripe } from "../../hooks/get-product-by-id";
import { getAllProductsStripe } from "../../hooks/get-all-products";

import { ProductCardSkeleton } from "../../components/ProductCardSkeleton";
import * as S from "../../styles/pages/product";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  defaultPriceId: string;
  imageUrl: string;
}

interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const { isFallback } = useRouter();

  if (isFallback) {
    return <ProductCardSkeleton />;
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }

  return (
    <>
      <Head>
        <title>Ignite Shop | {product.name}</title>
      </Head>

      <S.ProductContainer>
        <S.ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={400} />
        </S.ImageContainer>

        <S.ProductDetails>
          <h1>{product.name}</h1>

          <span>{product.price}</span>
          <p>{product.description}</p>

          <button
            onClick={handleBuyProduct}
            disabled={isCreatingCheckoutSession}
          >
            Comprar agora
          </button>
        </S.ProductDetails>
      </S.ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await getAllProductsStripe();

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const { product } = await getProductByIdStripe(productId);

  await new Promise((resolve) => setTimeout(() => resolve(""), 3000));

  return {
    props: {
      product,
    },

    revalidate: 60 * 60 * 1, // 1 hour
  };
};
