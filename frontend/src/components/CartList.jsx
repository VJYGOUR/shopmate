import useCartStore from "../lib/store";

function CartList() {
  const { cartArr } = useCartStore();
  return (
    <div>
      {cartArr.map((curr, i) => {
        return (
          <>
            <div key={i} className="text-5xl">
              <span>{curr.name}</span>
              <button>+</button>
              <span>{curr.qty}</span>
              <button>-</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default CartList;
