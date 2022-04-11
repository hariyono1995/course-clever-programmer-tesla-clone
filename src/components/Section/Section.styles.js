import styled from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => `/images/${props.bgImage}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
  text-transform: capitalize;
  h1 {
    font-size: 12rem;
  }

  p {
    padding-top: 1rem;
    font-size: 4rem;
  }

  /* @media (max-width: 500px) {
    h1 {
      font-size: 4rem;
    }
  } */
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  opacity: 0.75;
  font-size: 3rem;
  color: white;
  height: 150px;
  width: 720px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8rem;
`;

export const RightButton = styled(LeftButton)`
  background-color: rgba(238, 229, 233, 0.8);
  color: black;
  margin-right: 8rem;
`;

export const DownArrow = styled.img`
  margin-top: 20px;
  width: 120px;
  animation: animationDown infinite 1.5s;

  @keyframes animationDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(10px);
    }

    60% {
      transform: translateY(3px);
    }
  }
`;

export const Buttons = styled.div``;
