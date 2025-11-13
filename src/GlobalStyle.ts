import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: 'liga' 1, 'calt' 1; /* Enable ligatures for Inter */
    }

    /* Headings use Poppins for visual distinction */
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-feature-settings: normal;
    }

    /* Code elements use monospace font */
    code, kbd, samp, pre {
        font-family: 'Fira Code', 'JetBrains Mono', 'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New', monospace;
        font-feature-settings: 'liga' 1, 'calt' 1; /* Enable code ligatures */
    }
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const MainContent = styled.main`
    flex-grow: 1;
    background-color: #ffffff;
`;

