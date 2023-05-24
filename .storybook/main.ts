import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'
import 'storybook-vscode-component/register'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-styling',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-mdx-gfm',
    'storybook-addon-designs',
    '@storybook/addon-highlight',
    'storybook-css-modules',
    'storybook-addon-gatsby',
    'storybook-addon-jarle-monaco',
    'storybook-addon-swc',
    // "@whitespace/storybook-addon-html",
    // "storybook-addon-root-attribute/register",
    // "storybook-addon-custom-event-broadcaster/dist",
    //"storybook-vscode-component/register",
    // "@geometricpanda/storybook-addon-iframe",

    //'@bbbtech/storybook-formik/register'
    // "@storybook/addon-google-analytics",
    // "storybook-addon-live-examples",
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../src')]
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false }
        }
      }
    },

    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        // sourceLoaderOptions: {
        //   injectStoryParameters: false,
        // },
        loaderOptions: {
          injectStoryParameters: false
        }
      }
    }
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    }
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation'
  },
  refs: {
    'package-name': {
      disable: true
    }
  },
  staticDirs: ['../public'],
  features: {
    storyStoreV7: true
  }
  // env: (config) => ({
  //   ...config,
  //   API_HOMOLOG: "testt",
  // }),
}
export default config
