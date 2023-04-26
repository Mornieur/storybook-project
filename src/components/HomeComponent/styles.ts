import styled from "styled-components";

interface bubbles {
  speed?: number;
  left?: number;
  color1?: string;
  color2?: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BubblesContainer = styled.div``;

export const Bubbles = styled.main<bubbles>`
  position: absolute;
  left: ${(props) => props.left}vw;
  width: 30px;
  height: 30px;
  background: ${(props) => props.color1};
  margin: -10rem 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px ${(props) => props.color2},
    0 0 50px ${(props) => props.color1}, 0 0 100px ${(props) => props.color1};
  animation: animate 15s linear infinite;
  animation-duration: calc(85s / (${(props) => props.speed}));
  @keyframes animate {
    0% {
      transform: translateX(-5vw) translateY(-50vh) scale(0.5);
    }
    30% {
      transform: translateX(-10vw) translateY(-35vh) scale(0.2);
    }
    100% {
      transform: translateX(-20vw) translateY(0vh) scale(0);
    }
  }
`;

export const Bubbles2 = styled.main<bubbles>`
  position: absolute;
  left: ${(props) => props.left}vw;
  width: 30px;
  height: 30px;
  background: ${(props) => props.color1};
  margin: -10rem 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px ${(props) => props.color2},
    0 0 50px ${(props) => props.color1}, 0 0 100px ${(props) => props.color1};
  animation: animate2 15s linear infinite;
  animation-duration: calc(85s / (${(props) => props.speed}));
  @keyframes animate2 {
    0% {
      transform: translateX(5vw) translateY(-50vh) scale(0.5);
    }
    30% {
      transform: translateX(10vw) translateY(-35vh) scale(0.2);
    }
    100% {
      transform: translateX(20vw) translateY(0vh) scale(0);
    }
  }
`;
