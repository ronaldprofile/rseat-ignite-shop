import Skeleton from "react-loading-skeleton";
import * as S from "./styles";

export function ProductSkeleton() {
  return (
    <S.ProductContainerSkeleton>
      <Skeleton width={520} height={576} />

      <S.ProductDetailsSkeleton>
        <Skeleton height={45} className="product-title" />

        <div className="details">
          <Skeleton height={45} width={124} className="product-price" />
          <Skeleton height={24} count={4} className="product-description" />
        </div>

        <div className="buy-product">
          <Skeleton className="button-buy"/>
        </div>
      </S.ProductDetailsSkeleton>
    </S.ProductContainerSkeleton>
  );
}
