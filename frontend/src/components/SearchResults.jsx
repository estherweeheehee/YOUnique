import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results?.map((element) => (
        <div key={element._id}>
          <Link to={"/sell/" + element._id}>
          <p>{element.product_name}</p>
          <img src={element.product_image} />
          <p>{element.product_description}</p>
          <p>{element.product_price_one_off}</p>
          <p>{element.product_price_subscription}</p>
          <p>{element.product_listed_date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
