// Maps local product IDs to Shopify GraphQL variant IDs for real checkout
// Bundle products are separate Shopify products with their own variant IDs

export interface ShopifyMapping {
  shopifyProductGid: string;
  shopifyVariantGid: string;
  handle: string;
}

// Main products
export const productShopifyMap: Record<string, ShopifyMapping> = {
  '3-in-1-oral-kit': {
    shopifyProductGid: 'gid://shopify/Product/7214779301934',
    shopifyVariantGid: 'gid://shopify/ProductVariant/41719237771310',
    handle: 'llume-3-in-1-oral-care-kit',
  },
  'purple-toothpaste': {
    shopifyProductGid: 'gid://shopify/Product/7214779236398',
    shopifyVariantGid: 'gid://shopify/ProductVariant/41612108857390',
    handle: 'illume-whitening-toothpaste',
  },
  'whitening-strips': {
    shopifyProductGid: 'gid://shopify/Product/7529627353134',
    shopifyVariantGid: 'gid://shopify/ProductVariant/42133130117166',
    handle: 'illume-purple-advanced-whitening-strips',
  },
  'whitening-wand': {
    shopifyProductGid: 'gid://shopify/Product/7529632989230',
    shopifyVariantGid: 'gid://shopify/ProductVariant/42133178449966',
    handle: 'illume-extra-strength-whitening-wand',
  },
};

// Bundle products (each is a separate Shopify product)
export const bundleShopifyMap: Record<number, ShopifyMapping> = {
  // Buy 1 = same as main kit product
  1: {
    shopifyProductGid: 'gid://shopify/Product/7214779301934',
    shopifyVariantGid: 'gid://shopify/ProductVariant/41719237771310',
    handle: 'llume-3-in-1-oral-care-kit',
  },
  // His & Her's Bundle (2-pack)
  2: {
    shopifyProductGid: 'gid://shopify/Product/7497778757678',
    shopifyVariantGid: 'gid://shopify/ProductVariant/41993680683054',
    handle: 'x2-kits-illume-holiday-bundle-deal',
  },
  // 3 Pack Family Bundle
  3: {
    shopifyProductGid: 'gid://shopify/Product/7497778429998',
    shopifyVariantGid: 'gid://shopify/ProductVariant/41993678815278',
    handle: 'x3-kits-illume-holiday-bundle-deal',
  },
  // 4 Pack Bundle
  4: {
    shopifyProductGid: 'gid://shopify/Product/7497734455342',
    shopifyVariantGid: 'gid://shopify/ProductVariant/41993674522670',
    handle: '4-kit-illume-holiday-bundle',
  },
};
