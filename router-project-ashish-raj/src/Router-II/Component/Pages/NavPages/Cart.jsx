import React from "react";
import { AppContext } from "../../../AppContext/AppContextProvider";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cart } = this.context;

    console.log(cart);
    return (
      <>
        {cart.map((item) => (
          <div key={item.id}
            style={{
              display: "flex",
              flexDirection: "row",
              border: "1px solid black",
            }}
          >
            {" "}
            <div
              style={{
                border: "1px solid black",
                margin: "10px",
              }}
            >
              <img src={item.url} alt="" style={{ width: "150px" }} />
            </div>{" "}
            <div>
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </>
    );
  }
}

Cart.contextType = AppContext;
export default Cart;
