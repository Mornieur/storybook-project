import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const themeBtnTest = {
  primary: {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--white-color)',
    border: 'var(--primary-color)',
  },
  secondary: {
    backgroundColor: 'var(--white-color)',
    color: 'var(--primary-color)',
    border: 'var(--primary-color)',
  },
  save: {
    backgroundColor: 'var(--saved-color)',
    color: 'var(--white-color)',
    border: 'var(--saved-color)',
  },
  edit: {
    backgroundColor: 'var(--edit-color)',
    color: 'var(--white-color)',
    border: 'var(--edit-color)',
  },
  delete: {
    backgroundColor: 'var(--delete-color)',
    color: 'var(--white-color)',
    border: 'var(--delete-color)',
  },
};

export const globalViewports = {
  mobileS: {
    name: 'Mobile S',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  mobileM: {
    name: 'Mobile M',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  mobileL: {
    name: 'Mobile L',
    styles: {
      width: '425px',
      height: '812px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
};
