import type {Color, Product, Size} from "~/types/product";

export type CartItem = Product & { selected_size: Size, selected_color: Color, quantity: number, cart_id?: string };