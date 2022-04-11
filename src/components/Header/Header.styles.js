import styled from "styled-components";

import { AiOutlineMenuFold } from "@react-icons/all-files/ai/AiOutlineMenuFold";
import { VscChromeClose } from "@react-icons/all-files/vsc/VscChromeClose";

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
  z-index: 1;

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

export const BurgerNav = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  list-style: none;
  text-align: start;
  width: 300px;
  background-color: white;
  height: 100vh;
  padding: 20px;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;

  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 15px;

    a {
      font-weight: 600;
    }

    @media screen and (max-width: 500px) {
      padding: 10px;
      font-weight: 800;
    }
  }

  @media screen and (max-width: 500px) {
    width: 200px;
    padding-top: 30px;
  }
  /* opacity: 0.9; */
`;

export const WrapCustomCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CustomCloseButton = styled(VscChromeClose)`
  font-size: 25px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;
