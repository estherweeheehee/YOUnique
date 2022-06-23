import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment"

const UserProduct = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`/api/product/user/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  
  return (
    <div>
      <h1>View Products</h1>
      {product.map((element) => (
        <div key={element._id}>
            <p>{element.product_name}</p>
            <img src={element.product_image} />
            <p>{element.product_description}</p>
            <p>{element.product_price_one_off}</p>
            <p>{element.product_price_subscription}</p>
            <p>{moment(element.product_listed_date).format('DD MMMM YYYY, h:mm:ss a')}</p>            
        </div>
      ))}
    </div>
  );
};

export default UserProduct;
