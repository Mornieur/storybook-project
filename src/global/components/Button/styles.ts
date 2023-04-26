import styled from "styled-components";

interface IStyled {
  themeBtn: {
    backgroundColor: string;
    color: string;
    border: string;
  };
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

export const SimpleContainer = styled.div`
  height: 25px;
  display: flex;
  align-items: center;

  p {
    font-weight: 600;
  }
`;
