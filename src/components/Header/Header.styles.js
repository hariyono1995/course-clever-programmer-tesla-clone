import styled from "styled-components";

import MenuIcon from "@mui/icons-material/Menu";

export const Container = styled.div`
  position: fixed;
  min-height: 44px;
  /* background-color: yellow; */
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

export const Menu = styled.div`
  /* background-color: green; */
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  p {
    font-weight: 600;
    font-size: 14px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 14px;
  }
`;

export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
