import Image from "next/image";
import { X } from "phosphor-react";
import { useCart } from "../../context/Cart";

import * as S from "./styles";

interface SidebarCartProps {
  onCloseSidebar: () => void;
}

export function SidebarCart({ onCloseSidebar }: SidebarCartProps) {
  const { cart, removeProduct } = useCart();

  function handleRemoveProductCart(productId: string) {
    removeProduct(productId);
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
                  </S.ImageProductContainer>

                  <S.ProductItemInfo>
                    <span>Camiseta Beyond the Limits</span>
                    <strong>R$ 79,90</strong>

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
              <span>{cart.length} itens</span>
            </div>

            <div>
              <span>Valor total</span>
              <strong>R$ 270,00</strong>
            </div>
          </footer>
        </div>
      </S.SidebarWrapper>
    </S.SidebarContainer>
  );
}
