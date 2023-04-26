import styled from "styled-components";
import { themeBtn } from "./theme";

interface IStyled {
  themeBtn: {
    backgroundColor: string;
    color: string;
    border: string;
  };
}

interface IIcon {
  iconPosition: "left" | "right";
  svgColor: {
    fill: string;
  };
}

interface ILoading {
  svgColor: {
    fill: string;
  };
}

type themeBtnProps = {
  backgroundColor: string;
  color: string;
  border: string;
};
interface ICircle extends ILoading {
  format: "square" | "circle";
  themeBtn: themeBtnProps;
}

export const Container = styled.button<IStyled>`
  width: auto;

  background-color: ${({ themeBtn }) => themeBtn.backgroundColor};
  color: ${({ themeBtn }) => themeBtn.color};

  padding: 0.4rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ themeBtn }) => themeBtn.border};
  border-radius: 8px;

  transition: opacity 0.3s ease;

  :hover {
    opacity: 0.6;
  }

  :active {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ContainerCircle = styled.button<ICircle>`
  background-color: ${({ themeBtn }) => themeBtn.backgroundColor};
  color: ${({ themeBtn }) => themeBtn.color};

  font-size: 1rem;
  border: 2px solid ${({ themeBtn }) => themeBtn.border};

  border-radius: ${({ format }) => (format === "circle" ? "50%" : "12px")};

  width: 45px;
  height: 45px;
  display: grid;
  place-items: center;
  transition: opacity 0.3s ease;

  svg {
    width: 30px;
    height: 30px;
  }
  :hover {
    opacity: 0.9;
  }

  :active {
    opacity: 1;
  }
`;

export const SimpleContainer = styled.div`
  height: 25px;
  display: flex;
  align-items: center;

  p {
    font-weight: 600;
  }
`;

export const IconContainer = styled.div<IIcon>`
  height: 25px;
  display: flex;
  align-items: center;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === "left" ? "row" : "row-reverse"};
  gap: 0.5rem;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ svgColor }) => svgColor.fill};
  }
`;

export const LoadingContainer = styled.div<ILoading>`
  height: 25px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 25px;
    height: 25px;
  }
`;
