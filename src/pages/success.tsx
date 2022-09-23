import Link from "next/link";
import * as S from "../styles/pages/success";

export default function Success() {
  return (
    <S.SucessContainer>
      <h1>Compra efetuada</h1>

      <S.ImageContainer>
      </S.ImageContainer>

      <p>
        Uhuuu! <strong>Ronald Tomaz</strong>, sua{" "}
        <strong>camiseta Maratona Explorer </strong>
        já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </S.SucessContainer>
  );
}
