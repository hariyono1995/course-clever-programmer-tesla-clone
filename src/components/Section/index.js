import React from "react";

//  Add animation
import Fade from "react-reveal/Fade";

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
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{textLeftButton}</LeftButton>
            {textRightButton && <RightButton>{textRightButton}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};
