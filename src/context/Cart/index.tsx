import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  quantity?: number;
}

interface CartContextProps {
  cart: Product[];
  addProduct: (product: Product) => Promise<void>;
  removeProduct: (productId: string) => void;
}

interface CartProvider {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProvider) {
  const [cart, setCart] = useState<Product[]>([]);

  async function addProduct(product: Product) {
    const cartCopy = [...cart];

    const productExistsInCart = cartCopy.find((productItem) => {
      productItem.id === product.id;
    });

    const currentQuantityProduct = productExistsInCart
      ? productExistsInCart.quantity
      : 0;

    const quantity = currentQuantityProduct! + 1;

    if (productExistsInCart) {
      productExistsInCart.quantity = quantity;
    } else {
      const newProduct = {
        ...product,
        quantity: 1,
      };

      cartCopy.push(newProduct);
    }

    setCart(cartCopy);
  }

  async function removeProduct(productId: string) {
    const cartCopy = [...cart];

    const productIndex = cartCopy.findIndex(
      (product) => product.id === productId
    );

    if (productIndex >= 0) {
      cartCopy.splice(productIndex, 1);
      setCart(cartCopy);
    }
  }

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
