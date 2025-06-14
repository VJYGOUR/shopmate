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
  increaseQty: (product) =>
    set((state) => {
      const updatedItems = state.cartArr.map((curr, i) => {
        return product.id === curr.id ? { ...curr, qty: curr.qty + 1 } : curr;
      });
      return { cartArr: updatedItems };
    }),
  decreaseQty: (product) =>
    set((state) => {
      const updatedItems = state.cartArr
        .map((curr, i) => {
          if (product.id === curr.id) {
            return curr.qty > 1 ? { ...curr, qty: curr.qty - 1 } : null;
          }
          return curr;
        })
        .filter(Boolean);
      return { cartArr: updatedItems };
    }),
}));
export default useCartStore;
