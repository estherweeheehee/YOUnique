const ProductCategory = ({productdata}) => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-6 sm:px-3 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{productdata[0]?.product_category}</h2>
          <a href="#" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {productdata.map((product) => (
            <div key={product?._id} className="group relative">
              <div className="w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product?.product_image} 
                  alt={product?.product_name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product?.product_name}
                </a>
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-900">Purchase price: ${product?.product_price_one_off}</p>
              {product?.product_price_subscription === 0 ? "": <p className="mt-1 text-sm font-medium text-gray-900">Subscription price: ${product?.product_price_subscription}</p>}
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Shop the collection<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>

    // <div>
    //     {productdata.map((element) => (
    //     <div key={element._id}>
    //         <p>{element.product_name}</p>
    //         <img src={element.product_image} />
    //         <p>{element.product_description}</p>
    //         <p>{element.product_price_one_off}</p>
    //         <p>{element.product_price_subscription}</p>
    //         <p>{element.product_listed_date}</p>            
    //     </div>
    //   ))}
    // </div>
  );
};

export default ProductCategory;
