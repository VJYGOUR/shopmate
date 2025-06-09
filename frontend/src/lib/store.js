import { create } from "zustand";
const useCartStore = create((set) => ({
  cartArr: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cartArr.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedItem = state.cartArr.map((curr, i) => {
          return curr.id === existingItem.id
            ? { ...curr, qty: curr.qty + 1 }
            : curr;
        });
        return { cartArr: updatedItem };
      } else return { cartArr: [...state.cartArr, { ...product, qty: 1 }] };
    }),
}));
export default useCartStore;
