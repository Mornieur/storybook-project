import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const themeBtnTest = {
  primary: {
    backgroundColor: "var(--primary-color)",
    color: "var(--white-color)",
    border: "var(--primary-color)",
  },
  secondary: {
    backgroundColor: "var(--white-color)",
    color: "var(--primary-color)",
    border: "var(--primary-color)",
  },
  save: {
    backgroundColor: "var(--saved-color)",
    color: "var(--white-color)",
    border: "var(--saved-color)",
  },
  edit: {
    backgroundColor: "var(--edit-color)",
    color: "var(--white-color)",
    border: "var(--edit-color)",
  },
  delete: {
    backgroundColor: "var(--delete-color)",
    color: "var(--white-color)",
    border: "var(--delete-color)",
  },
};
