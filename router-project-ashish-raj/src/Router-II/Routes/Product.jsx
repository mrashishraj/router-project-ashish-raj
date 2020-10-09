import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext/AppContextProvider";

function Product(props) {
  const { id } = props.match.params;
  const { productArr, handleClick } = props;
  const obj = productArr.find((item) => item.id === Number(id));
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div>
          <img src={obj.url} alt="" style={{ width: "300px" }} />
        </div>
        <div>
          <h2>{obj.name}</h2>
        </div>
        <div>
          <button onClick={() => handleClick(obj.url, obj.name, obj.id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
