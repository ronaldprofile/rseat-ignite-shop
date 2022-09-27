import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logoIgniteShop from "../../assets/logo.svg";

import { Handbag } from "phosphor-react";
import * as S from "./styles";
import { useCart } from "../../context/Cart";
import { SidebarCart } from "../SidebarCart";

interface HeaderProps {
  showButtonBag?: boolean;
}

export function Header({ showButtonBag = true}: HeaderProps) {
  const [sidebarCartIsOpen, setSidebarCartIsOpen] = useState(false);
  const { cartProductsItemsQuantity } = useCart();

  const handleOpenSidebarCart = () => setSidebarCartIsOpen(true);

  const handleCloseSidebarCart = () => setSidebarCartIsOpen(false);

  return (
    <>
      <S.Header>
        <Link href="/">
          <Image
            src={logoIgniteShop.src}
            alt=""
            width={logoIgniteShop.width}
            height={logoIgniteShop.height}
          />
        </Link>

        {showButtonBag && (
          <S.ButtonProductsBag onClick={handleOpenSidebarCart}>
            <Handbag size={32} color="#8D8D99" weight="bold" />

            {cartProductsItemsQuantity !== 0 && (
              <S.ProductsQuantity>
                {cartProductsItemsQuantity}
              </S.ProductsQuantity>
            )}
          </S.ButtonProductsBag>
        )}
      </S.Header>

      {sidebarCartIsOpen && (
        <SidebarCart onCloseSidebar={handleCloseSidebarCart} />
      )}
    </>
  );
}
