import React from 'react';
import type {Preview} from '@storybook/react';
import {create} from '@storybook/theming';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import theme from '../src/theme';

// Create custom Storybook themes for docs
const storybookLightTheme = create({
    base: 'light',
    brandTitle: 'UI Component Library',
    brandUrl: '/',
    brandTarget: '_self',
    colorPrimary: '#3182ce',
    colorSecondary: '#64748b',
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#e2e8f0',
    appBorderRadius: 8,
    textColor: '#1a202c',
    textInverseColor: '#ffffff',
    textMutedColor: '#718096',
    barTextColor: '#718096',
    barSelectedColor: '#3182ce',
    barBg: '#ffffff',
    inputBg: '#ffffff',
    inputBorder: '#e2e8f0',
    inputTextColor: '#1a202c',
    inputBorderRadius: 8,
});

const storybookDarkTheme = create({
    base: 'dark',
    brandTitle: 'UI Component Library',
    brandUrl: '/',
    brandTarget: '_self',
    colorPrimary: '#63b3ed',
    colorSecondary: '#a0aec0',
    appBg: '#1a202c',
    appContentBg: '#2d3748',
    appBorderColor: '#4a5568',
    appBorderRadius: 8,
    textColor: '#f7fafc',
    textInverseColor: '#1a202c',
    textMutedColor: '#a0aec0',
    barTextColor: '#a0aec0',
    barSelectedColor: '#63b3ed',
    barBg: '#2d3748',
    inputBg: '#2d3748',
    inputBorder: '#4a5568',
    inputTextColor: '#f7fafc',
    inputBorderRadius: 8,
});

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            expanded: true,
            sort: 'requiredFirst',
        },
        layout: 'padded',
        docs: {
            theme: storybookLightTheme,
            source: {
                state: 'open',
                type: 'auto',
                transform: (code: string, storyContext: any) => {
                    // Transform the code to show the actual component usage for Interactive stories
                    if (storyContext.name === 'Interactive') {
                        const {args} = storyContext;

                        // Get component name from the story title or component
                        const titleParts = storyContext.title?.split('/');
                        const componentName = titleParts?.[titleParts.length - 1] ||
                            storyContext.component?.displayName ||
                            'Component';

                        // Define default values for common props to filter out
                        const commonDefaults: Record<string, any> = {
                            size: 'md',
                            variant: 'solid',
                            colorScheme: 'blue',
                            isLoading: false,
                            isDisabled: false,
                            isReadOnly: false,
                            isInvalid: false,
                            isChecked: false,
                            isIndeterminate: false,
                            placeholder: '',
                            loadingText: '',
                            focusBorderColor: 'blue.400',
                            errorBorderColor: 'red.300',
                            status: 'info'
                        };

                        // Generate clean code based on args
                        const props: string[] = [];
                        Object.entries(args).forEach(([key, value]: [string, any]) => {
                            // Skip children prop (handle separately)
                            if (key === 'children') return;

                            // Skip if value is default, undefined, null, or empty
                            if (value === undefined || value === null || value === '' ||
                                value === commonDefaults[key]) return;

                            // Format different prop types
                            if (typeof value === 'boolean' && value) {
                                props.push(key);
                            } else if (typeof value === 'string' && value !== '') {
                                props.push(`${key}="${value}"`);
                            } else if (typeof value === 'number') {
                                props.push(`${key}={${value}}`);
                            } else if (Array.isArray(value) && value.length > 0) {
                                props.push(`${key}={${JSON.stringify(value)}}`);
                            }
                        });

                        const propsString = props.length > 0 ? ` ${props.join(' ')}` : '';
                        const children = args.children;

                        if (children && typeof children === 'string') {
                            return `<${componentName}${propsString}>${children}</${componentName}>`;
                        } else {
                            return `<${componentName}${propsString} />`;
                        }
                    }
                    return code;
                },
            },
            canvas: {
                sourceState: 'shown',
            },
            story: {
                inline: true,
                iframeHeight: 'auto',
            },
        },
        // Global source configuration to show code by default
        source: {
            state: 'open',
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: [
                    {value: 'light', icon: 'sun', title: 'Light'},
                    {value: 'dark', icon: 'moon', title: 'Dark'},
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const colorMode = context.globals.theme === 'dark' ? 'dark' : 'light';
            const backgroundColor = colorMode === 'dark' ? '#000000' : '#ffffff';

            // Update docs theme dynamically
            if (context.parameters.docs) {
                context.parameters.docs.theme = colorMode === 'dark' ? storybookDarkTheme : storybookLightTheme;
            }

            return (
                <>
                    <ColorModeScript initialColorMode={colorMode}/>
                    <ChakraProvider theme={{...theme, config: {...theme.config, initialColorMode: colorMode}}}>
                        <StyledThemeProvider theme={theme}>
                            <div
                                style={{
                                    backgroundColor,
                                    minHeight: '10vh',
                                    padding: '1rem',
                                }}
                            >
                                <Story/>
                            </div>
                        </StyledThemeProvider>
                    </ChakraProvider>
                </>
            );
        },
    ],
};

export default preview;

