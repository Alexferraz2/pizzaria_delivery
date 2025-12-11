import { CartItem } from "@/types/cart-itens"
import { create } from "zustand"


type Store = {
    open: boolean,
    setOpen: (open: boolean) => void,
    items: CartItem[],
    addItem: (item: CartItem) => void,
    removeItem:(productId: number) => void
}

export const useCart = create<Store>()((set) =>({
    open: false,
    items: [],
    setOpen: (open) => set(state => ({ ...state, open})),    
    addItem: (item) => set(state => {
        let cloneItem = [...state.items];
        const existing = state.items.find(i => i.productId === item.productId);

        if(existing) {
            for(let key in cloneItem) {
                if(cloneItem[key].productId === item.productId) {
                    cloneItem[key].quantity += item.quantity;
                }
            }
        } else {
            cloneItem.push(item);
        }
        return { ...state, items: cloneItem };
    }),

    removeItem: (productId) => set(state => ({
        ...state,
        items: state.items.filter(item => item.productId !== productId)
    }))
}))