import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
    }

    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    button {
        border: none;
        outline: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;
