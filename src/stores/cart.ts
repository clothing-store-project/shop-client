import {acceptHMRUpdate, defineStore} from "pinia";
import type {CartItem} from "~/types/cart";

export const useCartStore = defineStore("cart",
  () => {
    const cartItems = ref<CartItem[]>([]);
    const total = computed(() => cartItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0));
    const totalItems = computed(() => cartItems.value.reduce((acc, item) => acc + item.quantity, 0));

    const addProductToCart = (product: CartItem) => {
      const index = cartItems.value.findIndex((item) => item.id === product.id && item.selected_size.id === product.selected_size.id && item.selected_color.id === product.selected_color.id);
      if (index === -1) {
        cartItems.value.push(product);
      } else {
        cartItems.value[index].quantity += product.quantity;
      }

      // useCookie("cart", {maxAge: 3600 * 24 * 30}).value = JSON.stringify(cartItems.value);
    };

    const removeCartItem = (product: CartItem) => {
      const index = cartItems.value.findIndex((item) => item.id === product.id && item.selected_size.id === product.selected_size.id && item.selected_color.id === product.selected_color.id);
      if (index !== -1) {
        cartItems.value.splice(index, 1);
      }
    };

    const updateProductQuantity = (product: CartItem, quantity: number) => {
      const index = cartItems.value.findIndex((item) => item.id === product.id && item.selected_size.id === product.selected_size.id && item.selected_color.id === product.selected_color.id);
      if (index !== -1) {
        cartItems.value[index].quantity = quantity;
      }
    };

    return {
      cartItems,
      total,
      totalItems,
      addProductToCart,
      removeCartItem,
      updateProductQuantity
    };
  },
  {
    persist: true
  }
);

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
