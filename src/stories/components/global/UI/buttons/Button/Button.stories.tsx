import { Button } from "../../../../../../global/components/Button/";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import dynamic from "next/dynamic";
import * as S from "../../../../../../global/components/Button/styles";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { linkTo } from "@storybook/addon-links";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";
import React, { useEffect } from "react";

const themeBtnTest = {
  primary: {
    backgroundColor: "var(--blue-dark)",
    color: "var(--white)",
    border: "var(--blue-dark)",
  },
  secondary: {
    backgroundColor: "var(--white)",
    color: "var(--blue-dark)",
    border: "var(--blue-dark)",
  },
  save: {
    backgroundColor: "var(--green-dark)",
    color: "var(--white)",
    border: "var(--green-dark)",
  },
  edit: {
    backgroundColor: "var(--blue-light)",
    color: "var(--white)",
    border: "var(--blue-light)",
  },
  exclude: {
    backgroundColor: "var(--red-dark)",
    color: "var(--white)",
    border: "var(--red-dark)",
  },
};

const button: Meta<typeof Button> = {
  title: "Global/components/Button",
  component: Button,
  argTypes: {
    // onClick: { action: 'clicked' },
    onClick: {
      control: {
        options: {
          type: ["ola", "alo"],
        },
        action: "clicked",
        type: "object",
        description: "optional onClick ``` (() => void) ```",
      },
      table: {
        category: "Events",
        action: "clicked",
        description: "optional onClick ``` (() => void) ```",
      },
    },
    children: {
      control: "text",
    },
  },
  parameters: {
    docs: {
      canvas: { sourceState: "shown" },
    },
    controls: { expanded: true, sort: "requiredFirst", default: null },
    design: {
      type: "figma",
      url: "https://www.figma.com/",
    },
  },
  decorators: [
    (story, context) => {
      const {
        form,
        type,
        theme,
        className,
        onClick,
        disabled,
        onKeyDown,
        children,
      } = context.args;
      return (
        <S.Container
          form={form}
          type={type ? type : "button"}
          themeBtn={themeBtnTest[theme]}
          className={className ? className : ""}
          onClick={onClick}
          disabled={disabled}
          onKeyDown={onKeyDown as any}
        >
          <S.SimpleContainer>
            <p>{children}</p>
          </S.SimpleContainer>
        </S.Container>
      );
    },
    withKnobs,
  ],
  args: {
    children: "Default",
    theme: "primary",
  },
};
export default button;
type Story = StoryObj<typeof Button>;

export const Enviar: Story = {
  args: {
    theme: "primary",
    children: "Enviar",
  },
};

export const Deletar: Story = {
  args: {
    theme: "primary",
    children: "Apagar",
  },
  argTypes: {
    onClick: {
      control: {
        type: "object",
      },
      table: {
        category: "Events",
        action: "clicked",
        description: "optional onClick ``` (() => void) ```",
        default: "false",
      },
    },
  },
};

export const AsDynamicVariables = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const content = `I am ${name} and I'm ${age} years old.`;

  return <div>{content}</div>;
};