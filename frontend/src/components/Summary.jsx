import useCartStore from "../lib/store";

function Summary() {
  const { cartArr } = useCartStore();
  const totalqty = cartArr.reduce((acc, curr) => {
    return acc + curr.qty;
  }, 0);
  return (
    <div>
      <span>Total ITEMS:{totalqty}</span>
    </div>
  );
}

export default Summary;
