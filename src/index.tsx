import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import store from 'services/store';
import AuthProvider from './providers/auth-provider/AuthProvider';
import App from './App';
import './index.css';
import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme';
import {ThemeProvider} from 'styled-components';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <AuthProvider>
                        <App/>
                    </AuthProvider>
                </ThemeProvider>
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);
