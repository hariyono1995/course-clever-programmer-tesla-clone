import React from "react";

import { Container, Menu } from "./Header.styles";

export default function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="Logo Tesla" />
      </a>
      <Menu>
        <a hreff="#">model s</a>
        <a hreff="#">model y</a>
        <a hreff="#">model 3</a>
        <a hreff="#">model x</a>
      </Menu>
    </Container>
  );
}
