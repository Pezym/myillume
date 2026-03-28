import { useQuery } from '@tanstack/react-query';
import { fetchShopifyProducts, fetchShopifyProductByHandle, ShopifyProduct } from '@/lib/shopify';

export function useShopifyProducts(first = 20, query?: string) {
  return useQuery<ShopifyProduct[]>({
    queryKey: ['shopify-products', first, query],
    queryFn: () => fetchShopifyProducts(first, query),
    staleTime: 5 * 60 * 1000,
  });
}

export function useShopifyProduct(handle: string) {
  return useQuery({
    queryKey: ['shopify-product', handle],
    queryFn: () => fetchShopifyProductByHandle(handle),
    enabled: !!handle,
    staleTime: 5 * 60 * 1000,
  });
}
