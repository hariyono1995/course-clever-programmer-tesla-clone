import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  min-height: 44px;
  background-color: yellow;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

export const Menu = styled.div`
  background-color: green;
  text-transform: uppercase;
  display: flex;

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
  }
`;
