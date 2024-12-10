import {acceptHMRUpdate, defineStore} from "pinia";
import type {CartItem} from "~/types/cart";
import {v4 as uuidv4} from 'uuid';

export const useCartStore = defineStore("cart",
  () => {
    const cartItems = ref<CartItem[]>([]);
    const total = computed(() => cartItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0));
    const totalItems = computed(() => cartItems.value.reduce((acc, item) => acc + item.quantity, 0));
    const addProductToCart = (product: CartItem) => {
      const index = cartItems.value.findIndex((item) => item.id === product.id && item.selected_size.id === product.selected_size.id && item.selected_color.id === product.selected_color.id);
      if (index === -1) {
        cartItems.value.push({...product, cart_id: uuidv4()});
      } else {
        cartItems.value[index].quantity += product.quantity;
      }
    };

    const removeCartItem = (product: CartItem) => {
      const index = cartItems.value.findIndex((item) => item.cart_id === product.cart_id);
      if (index !== -1) {
        cartItems.value.splice(index, 1);
      }
    };

    const updateCartItem = (product: CartItem) => {
      const index = cartItems.value.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        if (cartItems.value[index].selected_size.id === product.selected_size.id && cartItems.value[index].selected_color.id === product.selected_color.id) {
          cartItems.value[index].quantity += product.quantity;
          const indexRemove = cartItems.value.findIndex((item) => item.cart_id === product.cart_id);
          cartItems.value.splice(indexRemove, 1);
        } else {
          cartItems.value[index].selected_size = product.selected_size;
          cartItems.value[index].selected_color = product.selected_color;
          cartItems.value[index].quantity = product.quantity;
        }
      } else {
        cartItems.value.push({...product, cart_id: uuidv4()});
      }
    }

    const updateProductQuantity = (product: CartItem, quantity: number) => {
      const index = cartItems.value.findIndex((item) => item.cart_id === product.cart_id);
      if (index !== -1) {
        cartItems.value[index].quantity += quantity;
      }
    };

    return {
      cartItems,
      total,
      totalItems,
      addProductToCart,
      removeCartItem,
      updateProductQuantity,
      updateCartItem
    };
  },
  {
    persist: true
  }
);

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
