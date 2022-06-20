import { useState } from "react"
import { useAtom } from "jotai";
import { userAtom } from "../App";

const CreateProductForm = ({updateProduct}) => {
    const [user, setUser] = useAtom(userAtom);  
    const [product, setProduct] = useState({
        product_name: "",
        product_category: "",
        product_image:  "",
        product_description: "",
        product_price_one_off: "",
        product_price_subscription: "",
        product_posted_by_userId: "",
        userid: user._id,
    })

    const handleChange = (event, key) => {
        setProduct({
            ...product,
            [key]: event.target.value
        })
    }
    
    const handleSubmitProduct = (event) => {
        event.preventDefault();
        fetch("/api/product/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify( product ),
          })
            .then((response) => response.json())
            .then((data) => updateProduct(data));
    }

    return (
        <form method="post" onSubmit={handleSubmitProduct}>
            <fieldset>
              <legend>Add new Product</legend>
              <label htmlFor="productname">Product Name</label>
              <input className="inputfield" 
              required
              type="text" 
              placeholder="product name"
              name="productname" 
              id="productname"
              value={product.product_name}
              onChange={() => handleChange(event, "product_name")}
              />
              <br/>
              <label htmlFor="productcategory">Product Category</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="product category"
              name="productcategory" 
              id="productcategory" 
              value={product.product_category}
              onChange={() => handleChange(event, "product_category")}
              />
              <br/>
              <label htmlFor="productimage">Image</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="product image"
              name="productimage" 
              id="productimage" 
              value={product.product_image}
              onChange={() => handleChange(event, "product_image")}
              />
              <br/>
              <label htmlFor="productdescription">Product Description</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="product description"
              name="productdescription" 
              id="productdescription" 
              value={product.product_description}
              onChange={() => handleChange(event, "product_description")}
              />
              <label htmlFor="productpriceoneoff">Product price one off</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="product price one off"
              name="productpriceoneoff" 
              id="productpriceoneoff" 
              value={product.product_price_one_off}
              onChange={() => handleChange(event, "product_price_one_off")}
              />

              <br/>
              <label htmlFor="productpricesubscription">Product price subscription</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="product price subscription"
              name="productpricesubscription" 
              id="productpricesubscription" 
              value={product.product_price_subscription}
              onChange={() => handleChange(event, "product_price_subscription")}
              />
              <br/>
              <button>Add Product</button>
            </fieldset>

          </form>
    )
}

export default CreateProductForm