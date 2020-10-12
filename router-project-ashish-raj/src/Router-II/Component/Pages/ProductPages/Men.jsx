import React from "react"
import { Link, Redirect, Route } from "react-router-dom";
import styled from "styled-components";

const ItemContainer = styled.div`
  border: 1px solid black;
  padding: 5px;
  width: 300px;
  height: 200px;
  margin: 10px;
  borderradius: 5%;
  float:left
`;

const Container = styled.div`
width:100%;
float:left
`;

function Men({ isAuth, menCloth, isLogin }) {

  if (!isAuth) {
    return (
      <div>Loading...</div>
    )
  }

  if (!isLogin) {
    return (
      < Redirect to="/Login" />
    )
  }


  return (
    <Container>
      {menCloth.map((item) => (
        <ItemContainer key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt="" style={{ width: "100px" }} />
          <Link to={`/products/Men/${item.id}`}>more...</Link>
        </ItemContainer>
      ))}

    </Container>

  )


}
export default Men