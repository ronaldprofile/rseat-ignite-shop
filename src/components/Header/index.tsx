import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logoIgniteShop from "../../assets/logo.svg";

import { Handbag } from "phosphor-react";
import * as S from "./styles";
import { useCart } from "../../context/Cart";
import { SidebarCart } from "../SidebarCart";

export function Header() {
  const [sidebarCartIsOpen, setSidebarCartIsOpen] = useState(false);
  const { cart } = useCart();

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

        <S.ButtonProductsBag onClick={handleOpenSidebarCart}>
          <Handbag size={32} color="#8D8D99" weight="bold" />

          {cart.length !== 0 && (
            <S.ProductsQuantity>{cart.length}</S.ProductsQuantity>
          )}
        </S.ButtonProductsBag>
      </S.Header>

      {sidebarCartIsOpen && (
        <SidebarCart onCloseSidebar={handleCloseSidebarCart} />
      )}
    </>
  );
}
