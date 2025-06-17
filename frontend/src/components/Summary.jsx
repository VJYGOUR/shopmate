import useCartStore from "../lib/store";

function Summary() {
  const { cartArr } = useCartStore();
  const totalqty = cartArr.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  const items = ["SUBTOTAL", totalqty, "shipping", "tbd", "sales tax", "tbd"];

  return (
    <div className="block md:absolute md:top-10 md:h-[80vh] md:right-6 md:bg-gray-300 md:w-[30%] md:px-4">
      <h1 className="text-center border-b-2 py-8 md:text-left">SUMMARY</h1>

      {/* promo code */}
      <div className="flex flex-col items-center border-b-2 py-4 md:block">
        <p>Do you have a promo code?</p>
        <div className="flex h-8">
          <input type="text" className="border border-black" />
          <button className="bg-black text-white md:px-2">apply</button>
        </div>
      </div>

      {/* subtotal */}
      <div className="px-3 border-b-2 py-4 md:px-0">
        {items.map((item, i) =>
          i % 2 === 0 ? (
            <div key={i} className="grid grid-cols-2 w-full py-1">
              <span className="justify-self-start">{item}</span>
              <span className="justify-self-end">{items[i + 1]}</span>
            </div>
          ) : null
        )}
      </div>

      {/* estimated total */}
      <p className="text-center uppercase border-b-2 py-3 md:text-left">
        estimated total
      </p>

      {/* checkout */}
      <div className="px-3 text-center border-b-2 py-3 flex flex-col md:px-0 md:text-left">
        <button className="bg-black text-white uppercase py-2">checkout</button>
        <span className="mt-4">need help ? call this number</span>
      </div>
    </div>
  );
}

export default Summary;
