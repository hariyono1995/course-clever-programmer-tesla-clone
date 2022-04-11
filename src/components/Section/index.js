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

export const Section = ({
  title,
  description,
  textLeftButton,
  textRightButton,
  backgroundImage,
}) => {
  return (
    <Wrap bgImage={backgroundImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>

      <Buttons>
        <ButtonGroup>
          <LeftButton>{textLeftButton}</LeftButton>
          {textRightButton && <RightButton>{textRightButton}</RightButton>}
        </ButtonGroup>
        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};
