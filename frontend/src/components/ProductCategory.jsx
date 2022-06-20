const ProductCategory = ({productdata}) => {
  return (
    <div>
        {productdata.map((element) => (
        <div key={element._id}>
            <p>{element.product_name}</p>
            <img src={element.product_image} />
            <p>{element.product_description}</p>
            <p>{element.product_price_one_off}</p>
            <p>{element.product_price_subscription}</p>
            <p>{element.product_listed_date}</p>            
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
