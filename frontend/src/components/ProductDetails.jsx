const ProductDetails = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 rounded-lg object-cover"
      />
      <div className="md:w-1/2">
        <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
        <p className="text-xl text-blue-600 font-bold mb-2">{product.price}</p>
        <p className="text-gray-700 mb-4">{product.shortDesc}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
