import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "../../../global/components/Animation";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withKnobs } from "@storybook/addon-knobs";

import React, { useEffect } from "react";

import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import styled from "styled-components";

const getCaptionForLocale = (locale: any) => {
  switch (locale) {
    case "es":
      return "Hola!";
    case "fr":
      return "Bonjour!";
    case "kr":
      return "안녕하세요!";
    case "zh":
      return "你好!";
    default:
      return "Hello!";
  }
};

const arrows = {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
};

const customViewports = {
  MOBILE: {
    name: "Cellphone Example",
    styles: {
      width: "415px",
      height: "915px",
    },
  },
  IPAD: {
    name: "iPad Example",
    styles: {
      width: "810px",
      height: "1080px",
    },
  },
  DESKTOP: {
    name: "Desktop Example",
    styles: {
      width: "1300px",
      height: "1080px",
    },
  },
};

const meta: Meta<typeof Loading> = {
  title: "Global/components/Loading",
  // decorators: [withKnobs],
  decorators: [
    (Story) => {
      const Container = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
      return (
        <Container>
          <Story />
        </Container>
      );
    },
  ],
  excludeStories: /.*Data$/,
  component: Loading,
  argTypes: {
    label: { control: "text" },
    advanced: { control: "boolean" },
    margin: { control: "number", if: { arg: "advanced" } },
    padding: { control: "number", if: { arg: "advanced" } },
    cornerRadius: { control: "number", if: { arg: "advanced" } },
    arrow: {
      if: { arg: "advanced" },
      options: Object.keys(arrows),
      mapping: arrows,
      control: {
        type: "select",
        labels: {
          ArrowUp: "Up",
          ArrowDown: "Down",
          ArrowLeft: "Left",
          ArrowRight: "Right",
        },
      },
    },
    background: {
      control: "color",
    },
    backgroundColor: {
      control: "color",
    },
    variantColor: { control: "text" },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    TesteRadioOne: {
      options: ["Item One", "Item Two", "Item Three"],
      control: { type: "select" },
    },
    TesteRadioTwo: {
      options: ["Another Item One", "Another Item Two", "Another Item Three"],
      control: { type: "select" },
    },
  },
  parameters: {
    // viewport: {
    //   viewports: { ...INITIAL_VIEWPORTS, ...customViewports },
    //   defaultViewport: "iPad",
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  args: {
    background: "white",
    label: "Carregando",
  },

  parameters: {
    nextjs: {
      appDirectory: true,
    },
    // viewport: {
    //   defaultViewport: "iPad",
    //   viewport: { INITIAL_VIEWPORTS, ...customViewports },
    // },
    viewport: {
      defaultViewport: "responsive",
      viewports: {
        mobileS: {
          name: "Mobile S",
          styles: {
            width: "320px",
            height: "568px",
          },
        },
        mobileM: {
          name: "Mobile M",
          styles: {
            width: "375px",
            height: "667px",
          },
        },
        mobileL: {
          name: "Mobile L",
          styles: {
            width: "425px",
            height: "812px",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "900px",
          },
        },
      },
    },
  },
};

// Primary.storyName = "Primary";

export const Secondary: Story = {
  args: {
    ...Primary.args,
    primary: false,
  },
  parameters: {
    viewport: {
      viewport: { ...INITIAL_VIEWPORTS, ...customViewports },
      defaultViewport: "iPad",
    },
  },
  // decorators : [ story => ({story()})]
};

// Secondary.storyName = "Secondary";

export const StoryWithLocale = (
  {},
  { globals: { locale } }: { globals: { locale: string } }
) => {
  const caption = getCaptionForLocale(locale);
  return <p>{caption}</p>;
};

export const Unchecked: Story = {
  args: {
    label: "Unchecked",
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <div role="button"></div>
      </>
    ),
  ],
};
