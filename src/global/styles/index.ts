import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
  }

  img {
    image-rendering: auto;
  }

  body {
    background-color: var(--blue-background);
    width:100%;
    height:100%;
    scrollbar-width: thin;
  }

  html {
    @media (min-width: 1600px){
      font-size: 18px;
    }
    @media (min-width:600px){
      font-size:16px;
    }
    @media (max-height:720px){
      font-size:14px;
    }
    @media (max-width:480px){
      font-size:14px;
    }
  }

  li, ul {
    list-style: none;
  }

  button {
    cursor:pointer;
  }

  p, span, label {
    font-weight: var(--medium);
  }

  h1, h2 {
    font-weight: var(--bold);
    font-family: var(--titillium);
  }

  h3, h4, h5 {
    font-weight: var(--semibold);
    font-family: var(--titillium);
    color: var(--grey-700)
  }

  /* h1{
    color: var(--blue-dark-title)
  } */

  /* h2{
    color: var(--blue-dark)
  } */

  scroll-behavior: smooth;
  overflow-x: hidden;

  :root {

    // White Colors

    --black: #000;
    --white: #fff;
    --white-100: #f8f8f8;
    --whitesmoke: #FCFCFC;

    // Grey Colors 
    --grey-090: #F3F3F3;
    --grey-090: #d8d8d8;
    --grey-100: #dddddd;
    --grey-200: #e2e2e2;
    --grey-300: #c6c6c6;
    --grey-400: #8a8a8a;
    --grey-500: #797979;
    --grey-800: #4b4b4b;
    --grey-boxShadow: #c2c2c2;
    --grey-p: #6e6d6d;
    --grey-700: #6d6d6d;

    --grey-opacity: rgba(0, 0, 0, 0.2);

    // Yellow Colors

    --yellow-500: #ffd706;
    --yellow-600: #fdd100;
    --yellow-dark: #E5B800;

    // Green Colors

    --green-light:#34C759;
    --green-dark:#1AB570;
    --green-600: #16BA32;

    // Blue Colors

    --blue-50: #c8e1ff;
    --blue-300: #00a7ff;
    --blue-opaco: #65a1d3;
    --blue-light:#00A8FF; 
    --blue-dark: #2a4999;
    --blue-dark-title: #1E439B;
    --blue-dark2: #002B72;
    --blue-dark3: #012563;
    --essay-blue: #4693cf;
    --blueTwo-light: #b3dcff;
    --name-blue: #1f9aff;
    --cyan-500: #1AC4CD;

    --blue-background: #f6faff;
    --blue-card: #f6faff;

    // Pink Colors

    --pink-300: #F9778D;

    // Red Colors

    --red-dark: #ff2d2d;
    --red-600: #EF2929;
    --red-100: #FA7171;

    // Orange Colors

    --orange-300: #FCA844;

    // Purple Colors

    --purple-400: #C549EC;

    // FONTS
    --montserrat: 'Montserrat', sans-serif;
    --titillium: 'Titillium Web', sans-serif;

    // FONTS WEIGHT 
    --light: 300;
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;

    // FONTS
    --montserrat: 'Montserrat', sans-serif;
    --titillium: 'Titillium Web', sans-serif;

    // FONTS WEIGHT 
    --light: 300;
    --regular: 400;
    --medium: 500;
    --semibold: 600;
    --bold: 700;

    
    --default-box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
    --radius: 5px;
  }
`;
