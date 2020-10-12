import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext/AppContextProvider";

function Product(props) {
  const { id } = props.match.params;
  const { productArr, handleClick, isAuth } = props;
  const obj = productArr.find((item) => item.id === Number(id));
  if (!isAuth) {
    return (
      <>
        Loading
      </>
    )
  }
  if (!obj) {
    return (
      <div>404 page not found</div>
    )
  }
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div>
          <img src={obj.image} alt="" style={{ width: "300px" }} />
        </div>
        <div>
          <h2>{obj.title}</h2>
        </div>
        <div>
          <button onClick={() => handleClick(obj.image, obj.title, obj.id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
