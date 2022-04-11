import styled from "styled-components";

import { AiOutlineMenuFold } from "@react-icons/all-files/ai/AiOutlineMenuFold";

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

  @media screen and (max-width: 500px) {
    img {
      width: 80px;
    }
  }
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

  @media screen and (max-width: 768px) {
    p {
      display: none;
    }
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
  @media screen and (max-width: 500px) {
    a {
      font-weight: 800;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
`;

export const CustomMenu = styled(AiOutlineMenuFold)`
  cursor: pointer;
  font-size: 22px;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

export const BurgerNav = styled.ul``;
