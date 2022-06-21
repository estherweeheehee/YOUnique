import { useState } from "react";

const EditProductForm = ({ product, submitEdit }) => {
    const [changeProd, setChangeProd] = useState(product)
    const handleChange = (event, key) => {
        setChangeProd({
            ...changeProd,
            [key]: event.target.value
        })
    }

    const handleClick = () => {
        fetch(`/api/product/${changeProd._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...changeProd }),
          })
            .then((response) => response.json())
            .then((data) => { submitEdit(changeProd);
            });
    }
    return (
        <>
            <input onChange={() => handleChange(event, "product_image")} value={changeProd.product_image} />
            <br />
            <input onChange={() => handleChange(event, "product_name")} value={changeProd.product_name} />
            <br />
            <input onChange={() => handleChange(event, "product_category")} value={changeProd.product_category} />
            <br />
            <input onChange={() => handleChange(event, "product_description")} value={changeProd.product_description} />
            <br />
            <input onChange={() => handleChange(event, "product_price_one_off")} value={changeProd.product_price_one_off} />
            <br />
            <input onChange={() => handleChange(event, "product_price_subscription")} value={changeProd.product_price_subscription} />
            <br />
            <button onClick={handleClick}>Change</button>  
        </>
    )
};

export default EditProductForm;
