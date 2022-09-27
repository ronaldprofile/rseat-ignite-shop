import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import * as S from "../styles/pages/success";

interface Product {
  name: string;
  imageUrl: string;
}

interface SuccessProps {
  customerName: string;
  products: Product[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Comprar efetuada 🎉 | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <S.SuccessContainer>
        <S.ProductImageContainer>
          {products.map((product) => {
            return (
              <S.ImageContainer key={product.imageUrl}>
                <Image src={product.imageUrl} width={140} height={140} alt="" />
              </S.ImageContainer>
            );
          })}
        </S.ProductImageContainer>
        
        <h1>Compra efetuada</h1>

        <p>
          Uhuuu! <strong>{customerName}</strong>, suas compras já está a caminho
          da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </S.SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;

  const products = session.line_items?.data.map((product) => {
    const productData =  product.price?.product as Stripe.Product;

    return {
      name: productData.name,
      imageUrl: productData.images[0]
    }
  });

  console.log(products);

  return {
    props: {
      customerName,
      products,
    },
  };
};
