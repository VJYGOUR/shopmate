import useCartStore from "../lib/store";
import CartList from "../components/CartList";
import EmptyCart from "../components/EmptyCart";
import Summary from "../components/Summary";

function Cart() {
  const { cartArr: cartItems } = useCartStore();
  return (
    <div className="relative md:pl-12">
      <h1 className="text-3xl mt-20 tracking-[2px] py-10">My shopping bag</h1>
      {cartItems.length > 0 ? (
        <>
          <CartList />

          <Summary />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
