import CartList from "../components/CartList";
import Summary from "../components/Summary";

function Cart() {
  return (
    <div className="relative">
      <h1 className="text-3xl tracking-[2px]">My shopping bag</h1>

      <CartList />

      <Summary />
    </div>
  );
}

export default Cart;
