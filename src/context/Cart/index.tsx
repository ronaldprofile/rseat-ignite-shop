import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { produce } from "immer";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
  defaultPriceId?: string;
}
interface CartContextProps {
  cart: Product[];
  cartProductsItemsTotal: number;
  cartProductsItemsQuantity: number;
  addProduct: (product: Product) => Promise<void>;
  removeProduct: (productId: string) => void;
  buyProduct: () => Promise<void>;
}

interface CartProvider {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProvider) {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storageCart = JSON.parse(localStorage.getItem("@ignite-shop:cart")!);

    if (storageCart) setCart(storageCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("@ignite-shop:cart", JSON.stringify(cart));
  }, [cart]);

  const cartProductsItemsQuantity = cart.length;

  const cartProductsItemsTotal = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price * product.quantity;
  }, 0);

  async function addProduct(product: Product) {
    const alreadyProductExistsInCart = cart.findIndex(
      (productItem) => productItem.id === product.id
    );

    const newCart = produce(cart, (draft) => {
      if (alreadyProductExistsInCart < 0) {
        draft.push(product);
      } else {
        draft[alreadyProductExistsInCart].quantity += product.quantity;
      }
    });

    setCart(newCart);
  }

  async function removeProduct(productId: string) {
    const newCart = produce(cart, (draft) => {
      const alreadyProductExistsInCart = cart.findIndex(
        (productItem) => productItem.id === productId
      );

      if (alreadyProductExistsInCart >= 0) {
        draft.splice(alreadyProductExistsInCart, 1);
      }
    });

    setCart(newCart);
  }

  async function buyProduct() {
    const products = cart.map((product) => ({
      price: product.defaultPriceId,
      quantity: product.quantity,
    }));

    try {
      const response = await axios.post("/api/checkout", {
        products,
      });
      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);

      alert("Falha ao redirecionar ao checkout");
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        buyProduct,
        cartProductsItemsTotal,
        cartProductsItemsQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
