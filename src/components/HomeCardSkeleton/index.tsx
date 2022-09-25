import Skeleton from "react-loading-skeleton";
import * as S from "./styles";

export function HomeCardSkeleton() {
  return (
    <S.ProductSkeletonContainer>
      <Skeleton width={696} height={520} />

      <footer>
        <Skeleton width={330} height={32} />
      </footer>
    </S.ProductSkeletonContainer>
  );
}
