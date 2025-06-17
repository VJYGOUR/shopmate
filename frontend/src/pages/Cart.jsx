import CartList from "../components/CartList";
import Summary from "../components/Summary";
import useCartStore from "../lib/store";

function Cart() {
  const { cartArr } = useCartStore();
  return (
    <div className="relative md:pl-12">
      <h1 className="text-3xl mt-20 tracking-[2px] py-10">My shopping bag</h1>
      {cartArr.length > 0 ? (
        <>
          <CartList />

          <Summary />
        </>
      ) : (
        <div className="bg-amber-200 text-3xl h-36 flex justify-center items-center w-[90%] mx-auto">
          No Items in Cart
        </div>
      )}
    </div>
  );
}

export default Cart;
