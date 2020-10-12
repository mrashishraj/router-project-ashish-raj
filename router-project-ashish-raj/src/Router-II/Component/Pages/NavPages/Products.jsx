import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemContainer = styled.div`
  border: 1px solid black;
  padding: 5px;
  width: 300px;
  height: 200px;
  margin: 10px;
  borderradius: 5%;
`;

const Container = styled.div`
float:left;
`;

function Products({ productArr }) {
  console.log(productArr)
  return (
    <Container>
      {productArr.map((item) => (
        <ItemContainer key={item.id}>
          <h3>{item.name}</h3>
          <img src={item.url} alt="" style={{ width: "100px" }} />
          <Link to={`/products/${item.id}`}>more...</Link>
        </ItemContainer>
      ))}
    </Container>
  );
}

export default Products;
