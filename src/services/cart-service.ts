import { OrderDTO } from "../models/order";
import * as cartRepositoy from '../localstorage/cart-repository';

export function saveCart(cart: OrderDTO) {
    cartRepositoy.save(cart);
}

export function getCart() : OrderDTO {
    return cartRepositoy.get();
}