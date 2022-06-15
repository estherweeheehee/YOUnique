import React from "react";
import { useState } from "react";

function ImgAndDesc() {
  const [state, setState] = useState({});
  useEffect(() => {
    fetch("http://example.com/movies.json")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  return (
    <div>
      <img src={state.img} alt="No profile image" />
      <p>Description {state.description}</p>
    </div>
  );
}

export default ImgAndDesc;
