import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath, URL } from 'node:url';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('../src', import.meta.url)),
          'services': fileURLToPath(new URL('../src/services', import.meta.url)),
          'components': fileURLToPath(new URL('../src/components', import.meta.url)),
          'containers': fileURLToPath(new URL('../src/containers', import.meta.url)),
          'pages': fileURLToPath(new URL('../src/pages', import.meta.url)),
          'routes': fileURLToPath(new URL('../src/routes', import.meta.url)),
          'types': fileURLToPath(new URL('../src/types', import.meta.url)),
          'utils': fileURLToPath(new URL('../src/utils', import.meta.url)),
          'hooks': fileURLToPath(new URL('../src/hooks', import.meta.url)),
          'examples': fileURLToPath(new URL('../src/examples', import.meta.url)),
          'theme': fileURLToPath(new URL('../src/theme', import.meta.url)),
        },
      },
    });
  },
};

export default config;

