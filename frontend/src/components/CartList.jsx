import useCartStore from "../lib/store";

function CartList() {
  const { cartArr, increaseQty, decreaseQty } = useCartStore();

  return (
    <div className="w-[95%] mx-auto border-gray-400 border-t-2 bg-amber-100 md:w-[60%] md:mx-0 ">
      {/* Header */}
      <div className="flex justify-between items-center py-3 px-4 font-semibold border-b border-gray-400">
        <div className="md:flex md:items-center md:gap-6 md:w-1/2">
          <span className="md:uppercase">Product</span>
        </div>
        <div className="flex gap-8 w-1/2 justify-end">
          <span className="uppercase">Price</span>
          <span className="uppercase">Total</span>
        </div>
      </div>

      {/* Cart Items */}
      {cartArr.map((curr, i) => (
        <div
          key={i}
          className="border-b h-30 border-gray-300  flex justify-between items-center px-4 md:h-24"
        >
          {/* Product Info */}
          <div className="flex items-center gap-6 w-1/2">
            <img
              src={curr.image}
              alt=""
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex flex-col">
              <span className="font-bold">{curr.name}</span>
              <span className="text-sm text-gray-600">{curr.id}</span>
              <div className="flex items-center gap-2 mt-1">
                <button
                  className="px-2 py-1 bg-gray-300 rounded"
                  onClick={() => decreaseQty(curr)}
                >
                  -
                </button>
                <span>{curr.qty}</span>
                <button
                  className="px-2 py-1 bg-gray-300 rounded"
                  onClick={() => increaseQty(curr)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Price & Total */}
          <div className="flex gap-8 w-1/2 justify-end font-mono">
            <span className="inline-block w-[2rem]">${curr.price}</span>
            <span className="inline-block">${curr.qty * curr.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartList;
