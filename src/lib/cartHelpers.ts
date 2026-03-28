import { ShopifyProduct } from '@/lib/shopify';
import { Product } from '@/data/products';
import { productShopifyMap, bundleShopifyMap, ShopifyMapping } from '@/data/shopifyMap';

// Creates a minimal ShopifyProduct object for cart operations from local product data
export function buildCartProduct(product: Product, imageUrl?: string): ShopifyProduct {
  const mapping = productShopifyMap[product.id];
  return {
    node: {
      id: mapping?.shopifyProductGid || product.id,
      title: product.name,
      description: product.description,
      handle: mapping?.handle || product.id,
      priceRange: {
        minVariantPrice: {
          amount: product.price.toFixed(2),
          currencyCode: 'USD',
        },
      },
      images: {
        edges: imageUrl ? [{ node: { url: imageUrl, altText: product.name } }] : 
          [{ node: { url: product.image, altText: product.name } }],
      },
      variants: {
        edges: [{
          node: {
            id: mapping?.shopifyVariantGid || product.id,
            title: 'Default Title',
            price: { amount: product.price.toFixed(2), currencyCode: 'USD' },
            availableForSale: true,
            selectedOptions: [],
          },
        }],
      },
      options: [],
    },
  };
}

export function buildBundleCartProduct(
  bundleQty: number,
  label: string,
  price: number,
  imageUrl: string,
): { product: ShopifyProduct; variantId: string } {
  const mapping = bundleShopifyMap[bundleQty];
  if (!mapping) {
    throw new Error(`No Shopify mapping for bundle qty ${bundleQty}`);
  }

  return {
    product: {
      node: {
        id: mapping.shopifyProductGid,
        title: label,
        description: '',
        handle: mapping.handle,
        priceRange: {
          minVariantPrice: { amount: price.toFixed(2), currencyCode: 'USD' },
        },
        images: {
          edges: [{ node: { url: imageUrl, altText: label } }],
        },
        variants: {
          edges: [{
            node: {
              id: mapping.shopifyVariantGid,
              title: label,
              price: { amount: price.toFixed(2), currencyCode: 'USD' },
              availableForSale: true,
              selectedOptions: [],
            },
          }],
        },
        options: [],
      },
    },
    variantId: mapping.shopifyVariantGid,
  };
}

export { productShopifyMap, bundleShopifyMap };
