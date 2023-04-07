import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Home = () => {
  const Heading = styled.h1`
    justify-content: center;
    text-align: center;
    align-item: center;
    margin-top: 25px;
  `;
  const Button = styled.button`
    background-color: black;
    text-align: center;
    color: white;
    margin-top: 5px;
    &:hover {
      background-color: ${(props) => props.bg};
    }
  `;
  return (
    <div>
      <Navbar />
      <Heading>Saad</Heading>
      <Button bg="red">Press Me</Button>
    </div>
  );
};

export default Home;
