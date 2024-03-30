import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepositoy from '../localstorage/cart-repository';
import { ProductDTO } from "../models/products";

export function saveCart(cart: OrderDTO) {
    cartRepositoy.save(cart);
}

export function getCart() : OrderDTO {
    return cartRepositoy.get();
}

export function addProduct(product : ProductDTO) {
    const cart = cartRepositoy.get();
    const item = cart.items.find(x => x.productId === product.id);
    if (!item) {
        const newItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);
        cart.items.push(newItem);
        cartRepositoy.save(cart);
    }
}

export function clearCart() {
    cartRepositoy.clear();
}

export function increaseItem(productId: number) {
    const cart = cartRepositoy.get();
    const item = cart.items.find(x => x.productId === productId);
    if (item) {
        item.quantity++
        cartRepositoy.save(cart);        
    }    
}

export function decreaseItem(productId: number) {
    const cart = cartRepositoy.get();
    const item = cart.items.find(x => x.productId === productId);
    if (item) {
        item.quantity--
        if (item.quantity < 1) {
            cart.items = cart.items.filter(x => x.productId !== productId);
        }
        cartRepositoy.save(cart);        
    }    
}
