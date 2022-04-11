import React from "react";

//  Components
import { Section } from "../../Section/index";

//  Styles
import { Container } from "./Home.styles";

export default function Home() {
  return (
    <Container>
      <Section
        title="model s"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        textLeftButton="Custom Order"
        textRightButton="Exiting Inventory"
      />
      <Section
        title="model y"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-y.jpg"
        textLeftButton="Custom Order"
        textRightButton="Exiting Inventory"
      />
      <Section
        title="model 3"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        textLeftButton="Custom Order"
        textRightButton="Exiting Inventory"
      />
      <Section
        title="model x"
        description="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        textLeftButton="Custom Order"
        textRightButton="Exiting Inventory"
      />
      <Section
        title="lowest cost solar panels in america"
        description="money-back guarantee"
        backgroundImage="solar-panel.jpg"
        textLeftButton="order now"
        textRightButton="learn more"
      />
      <Section
        title="solar for new roofs"
        description="solar roof costs less than a new!"
        backgroundImage="solar-roof.jpg"
        textLeftButton="order now"
        textRightButton="learn more"
      />
      <Section
        title="accessories"
        description=""
        backgroundImage="accessories.jpg"
        textLeftButton="shop now"
      />
    </Container>
  );
}
