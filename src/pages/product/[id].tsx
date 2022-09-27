import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import { useCart } from "../../context/Cart";
import { getProductByIdStripe } from "../../hooks/get-product-by-id";
import { getAllProductsStripe } from "../../hooks/get-all-products";
import { ProductCardSkeleton } from "../../components/ProductCardSkeleton";
import { formatPrice } from "../../utils/formatPrice";

import * as S from "../../styles/pages/product";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  defaultPriceId: string;
  imageUrl: string;
  quantity: number;
}

interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  const { addProduct } = useCart();

  const { isFallback } = useRouter();

  if (isFallback) {
    return <ProductCardSkeleton />;
  }

  async function handleAddProductToCart() {
    const newProduct = {
      ...product,
      quantity: 1,
    };

    await addProduct(newProduct);
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

          <span>{formatPrice(product.price)}</span>
          <p>{product.description}</p>

          <button onClick={handleAddProductToCart}>Colocar na sacola</button>
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
