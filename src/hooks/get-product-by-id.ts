import Stripe from "stripe";
import { stripe } from "../lib/stripe";

export async function getProductByIdStripe(productId: string) {
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    product: {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      defaultPriceId: price.id,
      price: price.unit_amount! / 100,
    },
  };
}
