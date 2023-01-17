import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#">Menu</a>
      </RightMenu>

      <BurgerNav>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Demo Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 1200px) {
    a:nth-child(1) {
      display: none;
    }
    a:nth-child(2) {
      display: none;
    }

    a:nth-child(3) {
      background-color: #c8d0d9;
      padding: 6px 14px;
      border-radius: 6px;
      transition: 0.15s ease-in all;
      :hover {
        background-color: rgb(200, 208, 217, 0.8);
      }
    }
  }
`;

const MenuRight = styled.a``;

const BurgerNav = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  background: white;
  width: 300px;
  z-index: 2;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba();
  }
`;
