import React from "react";

import {
  Wrap,
  ItemText,
  ButtonGroup,
  RightButton,
  LeftButton,
  DownArrow,
  Buttons,
} from "./Section.styles";

export const Section = () => {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Exiting Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};
