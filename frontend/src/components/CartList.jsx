import useCartStore from "../lib/store";

function CartList() {
  const { cartArr, increaseQty, decreaseQty } = useCartStore();
  return (
    <div className="bg-amber-100 w-[60%]">
      {cartArr.map((curr, i) => {
        return (
          <>
            <main
              key={i}
              className="mt-10 border-b-2 h-20 flex justify-between "
            >
              <div className="flex items-center gap-6 ">
                <img
                  src={curr.image}
                  alt=""
                  className="w-15 h-15 object-cover rounded-md"
                />
                <div className="flex flex-col items-center">
                  <span className="font-bold">{curr.name}</span>
                  <span>{curr.id}</span>
                  <div>
                    <button
                      className="cursor-pointer"
                      onClick={() => decreaseQty(curr)}
                    >
                      -
                    </button>
                    <span>{curr.qty}</span>
                    <button
                      className="cursor-pointer"
                      onClick={() => increaseQty(curr)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span>Price:{curr.price}</span>
                <span>Total:{curr.qty * curr.price}</span>
              </div>
            </main>
          </>
        );
      })}
    </div>
  );
}

export default CartList;
