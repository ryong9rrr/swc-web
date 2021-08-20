import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const lightTheme = {
  fontColor: "rgb(38, 38, 38)",
  bgColor: "#fafafa",
  borderColor: "rgb(219, 219, 219)",
  accent: "#0095f6",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}

    html {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    body{
        font-size:16px;
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.bgColor};
    }
    input {
      background-color: #fafafa;
    }

    a {
      text-decoration: none;
    }
`;
