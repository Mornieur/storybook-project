enum Themes {
  "primary",
  "secondary",
  "save",
  "delete",
  "edit",
}

export const themeBtn = {
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

export const iconTheme = {
  primary: {
    fill: "var(--white-color)",
  },
  secondary: {
    fill: "var(--edit-color)",
  },
  save: {
    fill: "var(--white-color)",
  },
  edit: {
    fill: "var(--white-color)",
  },
  delete: {
    fill: "var(--white-color)",
  },
};
