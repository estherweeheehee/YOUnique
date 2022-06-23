import { useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "../App";

const CreateProductForm = ({ addProduct }) => {
  const [user, setUser] = useAtom(userAtom);
  const [product, setProduct] = useState({
    product_name: "",
    product_category: "",
    product_image: "",
    product_description: "",
    product_price_one_off: "",
    product_price_subscription: "",
    product_posted_by_userId: "",
    userid: user._id,
  });

  const handleChange = (event, key) => {
    setProduct({
      ...product,
      [key]: event.target.value,
    });
  };

  const handleSubmitProduct = (event) => {
    event.preventDefault();
    fetch("/api/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => addProduct(data));
    setProduct({
      product_name: "",
      product_category: "",
      product_image: "",
      product_description: "",
      product_price_one_off: "",
      product_price_subscription: "",
      product_posted_by_userId: "",
      userid: user._id,
    });
  };

  return (
    <>
      {/* logo plus wording */}
      <div className="min-h-full flex flex-col justify-center py-8 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://i.imgur.com/4fZaiaq.png"
            alt="Workflow"
          />
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
            Add a new product
          </h2>
        </div>

        {/* product category & password */}
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-15">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmitProduct}
            >
              <div>
                <label
                  htmlFor="productname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <div className="mt-1">
                  <input
                    id="productname"
                    name="productname"
                    type="text"
                    required
                    value={product.product_name}
                    onChange={() => handleChange(event, "product_name")}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="productcategory"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Category
                </label>
                <div className="mt-1">
                  <input
                    id="productcategory"
                    name="productcategory"
                    type="text"
                    required
                    value={product.product_category}
                    onChange={() => handleChange(event, "product_category")}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* product image */}
              <div>
                <label
                  htmlFor="productimage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Image URL
                </label>
                <div className="mt-1">
                  <input
                    id="productimage"
                    name="productimage"
                    type="text"
                    required
                    value={product.product_image}
                    onChange={() => handleChange(event, "product_image")}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* product description */}
              <div>
                <label
                  htmlFor="productdescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Description
                </label>
                <div className="mt-1">
                  <input
                    id="productdescription"
                    name="productdescription"
                    type="text"
                    required
                    value={product.product_description}
                    onChange={() => handleChange(event, "product_description")}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Product prices */}
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="productpriceoneoff"
                    className="block text-sm font-medium text-gray-700"
                  >
                    One-off Product Price
                  </label>
                  <input
                    type="text"
                    name="productpriceoneoff"
                    id="productpriceoneoff"
                    required
                    value={product.product_price_one_off}
                    onChange={() =>
                      handleChange(event, "product_price_one_off")
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="productpricesubscription"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Monthly Subscription Price (Quantity of 1 per month)
                  </label>
                  <input
                    type="text"
                    name="productpricesubscription"
                    id="productpricesubscription"
                    required
                    value={product.product_price_subscription}
                    onChange={() =>
                      handleChange(event, "product_price_subscription")
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Sign up */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProductForm;
