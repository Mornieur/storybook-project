import { GlobalStyle } from "../src/global/styles";
import * as NextImage from "next/image";
import { setupWorker, rest } from "msw";
import React, { Suspense, useEffect } from "react";
import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  customViewports,
  globalTranslate,
} from "./themes";
import i18n from "../src/i18n";
import { I18nextProvider } from "react-i18next";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from "@storybook/blocks";
import { initialize } from "msw-storybook-addon";
import { wd } from "paths.macro";
import { themes } from "@storybook/theming";

initialize({
  onUnhandledRequest: "bypass",
});

if (typeof global.process === "undefined") {
  const worker = setupWorker(
    rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
      return res(ctx.json({ name: "John Doh" }));
    })
  );
  worker.start();
}

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

function LocaleUpdater({ locale }) {
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return null;
}

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: ["☀️ Light", "🌙 Dark"],
        showName: true,
        dynamicTitle: true,
      },
    },
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      defaultValue: "en",
      toolbar: {
        icon: "globe",
        items: globalTranslate,
        showName: true,
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
    msw: {
      handlers: {
        auth: [
          rest.get("/essay", (req, res, ctx) => {
            return res(
              ctx.json({
                success: true,
              })
            );
          }),
          rest.get("/logout", (req, res, ctx) => {
            return res(
              ctx.json({
                success: true,
              })
            );
          }),
        ],
      },
    },
    storySort: {
      order: ["Examples", "Docs", "Demo"],
    },
    viewport: {
      viewport: {
        viewports: { ...INITIAL_VIEWPORTS, ...customViewports },
        defaultViewport: "iPad",
      },
      defaultViewport: "someDefault",
    },

    actions: { argTypesRegex: "^on.*" },
    options: {
      storySort: {
        order: ["Intro", "Components"],
        method: "alphabetical",
        locales: "pt-BR",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === "" ? darkTheme : lightTheme;
      const { locale } = context.globals;

      useEffect(() => {
        i18n.changeLanguage(locale);
      }, [locale]);

      i18n.on("languageChanged", (locale) => {
        const direction = i18n.dir(locale);
        document.dir = direction;
      });

      return (
        <Suspense fallback={<div>loading translations...</div>}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <I18nextProvider i18n={i18n}>
              <LocaleUpdater locale={locale} />
              <Story />
            </I18nextProvider>
          </ThemeProvider>
        </Suspense>
      );
    },
  ],
};

export default preview;

export const InputWithoutAutofill = () => <input type="text" />;

InputWithoutAutofill.parameters = {
  a11y: {
    disable: true,

    config: {
      rules: [
        {
          id: "autocomplete-valid",
          selector: '*:not([autocomplete="nope"])',
        },
        {
          id: "landmark-complementary-is-top-level",
          reviewOnFail: true,
        },
      ],
    },
  },
};

export const Inaccessible = () => (
  <button style={{ backgroundColor: "red", color: "darkRed" }}>
    Inaccessible button
  </button>
);
Inaccessible.parameters = {
  a11y: {
    config: {
      rules: [{ id: "color-contrast", enabled: false }],
    },
  },
};
