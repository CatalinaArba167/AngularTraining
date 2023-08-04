export interface ProductAndProductCategory {
  productId: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  productWeight: number;
  productSupplier: string;
  productImageUrl: string;

  productCategoryId: string;
  productCategoryName: string;
  productCategoryDescription: string;
  quantity?: number;
}
