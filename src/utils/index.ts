import type {CartItem} from "~/types/cart";
import type {Color, Product} from "~/types/product";

export const getProductProperty = (product: Product | CartItem,) => {
  const colors = computed(() => product.configurable_options.find(option => option.attribute_code === 'color')?.values as Color[] || []);
  const sizes = computed(() => product.configurable_options.find(option => option.attribute_code === 'size')?.values || []);
  const productDiscount = computed(() => Math.ceil((product.regular_price - product.price) / product.regular_price * 100));

  return {colors, sizes, productDiscount};
}