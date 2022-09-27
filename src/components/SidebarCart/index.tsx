import Image from "next/image";
import { X } from "phosphor-react";
import { useState } from "react";
import { useCart } from "../../context/Cart";
import { formatPrice } from "../../utils/formatPrice";

import * as S from "./styles";

interface SidebarCartProps {
  onCloseSidebar: () => void;
}

export function SidebarCart({ onCloseSidebar }: SidebarCartProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  const {
    cart,
    buyProduct,
    removeProduct,
    cartProductsItemsTotal,
    cartProductsItemsQuantity,
  } = useCart();

  function handleRemoveProductCart(productId: string) {
    removeProduct(productId);
  }

  async function handleBuyProduct() {
    setIsCreatingCheckoutSession(true);
    await buyProduct();
    setIsCreatingCheckoutSession(false);
  }

  return (
    <S.SidebarContainer>
      <S.ButtonCloseSidebar
        onClick={onCloseSidebar}
        title="fechar menu lateral"
      >
        <X size={24} color="#8D8D99" />
      </S.ButtonCloseSidebar>

      <S.SidebarWrapper>
        <S.SidebarTitle>Sacola de compras</S.SidebarTitle>

        <div>
          <S.ProductsList>
            {cart.map((product) => {
              return (
                <S.ProductItem key={product.id}>
                  <S.ImageProductContainer>
                    <Image
                      src={product.imageUrl}
                      width={100}
                      height={93}
                      alt=""
                    />

                    <S.ProductsQuantity>{product.quantity}</S.ProductsQuantity>
                  </S.ImageProductContainer>

                  <S.ProductItemInfo>
                    <span>{product.name}</span>
                    <strong>{formatPrice(product.price)}</strong>

                    <button onClick={() => handleRemoveProductCart(product.id)}>
                      Remover
                    </button>
                  </S.ProductItemInfo>
                </S.ProductItem>
              );
            })}
          </S.ProductsList>

          <footer>
            <div>
              <span>Quantidade</span>
              <span>{cartProductsItemsQuantity} itens</span>
            </div>

            <div>
              <span>Valor total</span>
              <strong>{formatPrice(cartProductsItemsTotal)}</strong>
            </div>

            <S.ButtonCompleteOrder
              onClick={handleBuyProduct}
              disabled={isCreatingCheckoutSession || cartProductsItemsQuantity <= 0}
            >
              Finalizar compra
            </S.ButtonCompleteOrder>
          </footer>
        </div>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  );
}
