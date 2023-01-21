import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#FF8A00",
  secondary: "#FFC400",

  background: "#FFFAE6",

  white: "#FFFFFF",
  black: "#000000",
  gray: "#CCCCCC",
  darkGray: "#666666",

  success: "#1BD97B",
  error: "#D50000",
  warning: "#FFC400",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colors.background};
    font-family: 'Inter', sans-serif;
    color: ${colors.darkGray};
  }
  .mb-1 {
    margin-bottom: 1rem;
  }
  .mb-2 {
    margin-bottom: 2rem;
  }
  .mb-3 {
    margin-bottom: 3rem;
  }
  .mb-4 {
    margin-bottom: 4rem;
  }
  .mb-5 {
    margin-bottom: 5rem;
  }
`;
