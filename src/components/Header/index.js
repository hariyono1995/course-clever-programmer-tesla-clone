import React, { useState } from "react";

import {
  Container,
  Menu,
  RightMenu,
  CustomMenu,
  BurgerNav,
  WrapCustomCloseButton,
  CustomCloseButton,
} from "./Header.styles";

const burgerList = [
  "model s",
  "model 3",
  "model x",
  "model y",
  "exiting inventory",
  "used inventory",
  "trade-in",
  "cyber-truck",
  "road-start",
  "semi",
  "test drive",
  "contact us",
  "utilities",
];

export default function Header() {
  const [isOpen, setIsopen] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Logo Tesla" />
      </a>
      <Menu>
        <p>
          <a href="#">model s</a>
        </p>
        <p>
          <a href="#">model y</a>
        </p>
        <p>
          <a href="#">model 3</a>
        </p>
        <p>
          <a href="#">model x</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">shop</a>
        <a href="#">tesla account</a>
        <CustomMenu onClick={() => setIsopen(true)} />

        <BurgerNav show={isOpen}>
          <WrapCustomCloseButton>
            <CustomCloseButton onClick={() => setIsopen(false)} />
          </WrapCustomCloseButton>
          {burgerList.map((menu, index) => (
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </BurgerNav>
      </RightMenu>
    </Container>
  );
}
