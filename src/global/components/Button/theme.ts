enum Themes {
  'primary',
  'secondary',
  'save',
  'exclude',
  'edit',
}


export const themeBtn = {
  primary: {
    backgroundColor: 'var(--blue-dark)',
    color: 'var(--white)',
    border: 'var(--blue-dark)',
  },
  secondary: {
    backgroundColor: 'var(--white)',
    color: 'var(--blue-dark)',
    border: 'var(--blue-dark)',
  },
  save: {
    backgroundColor: 'var(--green-dark)',
    color: 'var(--white)',
    border: 'var(--green-dark)',
  },
  edit: {
    backgroundColor: 'var(--blue-light)',
    color: 'var(--white)',
    border: 'var(--blue-light)',
  },
  exclude: {
    backgroundColor: 'var(--red-dark)',
    color: 'var(--white)',
    border: 'var(--red-dark)',
  },
};

export const iconTheme = {
  primary: {
    fill: 'var(--white)',
  },
  secondary: {
    fill: 'var(--blue-dark)',
  },
  save: {
    fill: 'var(--white)',
  },
  edit: {
    fill: 'var(--white)',
  },
  exclude: {
    fill: 'var(--white)',
  },
};
