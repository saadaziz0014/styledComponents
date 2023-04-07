import React from "react";
import styled from "styled-components";

const Navbar = () => {
  let coloring = "white";
  const Navc = styled.nav`
    background-color: black;
    margin-top: 2px;
  `;
  const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    list-style: none;
    font-size: 42px;
    li: {
      padding: 5px;
    }
  `;

  return (
    <div>
      <Navc>
        <Ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </Ul>
      </Navc>
    </div>
  );
};

export default Navbar;
