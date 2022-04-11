import React from "react";

import { Container, Menu, RightMenu, CustomMenu } from "./Header.styles";

export default function Header() {
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
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}
