import { Button } from '../../../../../global/components/Button';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dynamic from 'next/dynamic';
import * as S from '../../../../../global/components/Button/styles';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';
import React, { useEffect } from 'react';
import { themeBtnTest } from '../../../../styles/index';

const button = {
  title: 'Global/components/Button',
  component: Button,
  argTypes: {
    onClick: {
      control: {
        options: {
          type: ['ola', 'alo'],
        },
        action: 'clicked',
        type: 'object',
        description: 'optional onClick ``` (() => void) ```',
      },
      table: {
        category: 'Events',
        action: 'clicked',
        description: 'optional onClick ``` (() => void) ```',
      },
    },
    onKeyDown: {
      control: {
        options: {
          type: ['ola', 'alo'],
        },
        action: 'clicked',
        type: 'object',
        description: 'optional onClick ``` (() => void) ```',
      },
      table: {
        category: 'Events',
        action: 'clicked',
        description: 'optional onClick ``` (() => void) ```',
      },
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
    },
    controls: { expanded: true, sort: 'requiredFirst', default: null },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/',
    },
  },
  decorators: [
    (story, context) => {
      const { type, theme, className, onClick, disabled, onKeyDown, children } =
        context.args;
      return (
        <S.Container
          type={type ? type : 'button'}
          themeBtn={themeBtnTest[theme]}
          className={className ? className : ''}
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
    children: 'Default',
    theme: 'primary',
  },
} satisfies Meta<typeof Button>;
export default button;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Primário')).toBeInTheDocument();
  },
  args: {
    theme: 'primary',
    children: 'Primário',
  },
  argTypes: {
    onClick: {
      control: {
        type: 'object',
      },
      table: {
        category: 'Events',
        action: 'clicked',
        description: 'optional onClick ``` (() => void) ```',
        default: 'false',
      },
    },
  },
};

export const Secundário: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Secundário')).toBeInTheDocument();
  },
  args: {
    theme: 'secondary',
    children: 'Secundário',
  },
  argTypes: {
    onClick: {
      control: {
        type: 'object',
      },
      table: {
        category: 'Events',
        action: 'clicked',
        description: 'optional onClick ``` (() => void) ```',
        default: 'false',
      },
    },
  },
};

export const Deletar: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Apagar')).toBeInTheDocument();
  },
  args: {
    theme: 'delete',
    children: 'Apagar',
  },
  argTypes: {
    onClick: {
      control: {
        type: 'object',
      },
      table: {
        category: 'Events',
        action: 'clicked',
        description: 'optional onClick ``` (() => void) ```',
        default: 'false',
      },
    },
  },
};
export const Editar: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Editar')).toBeInTheDocument();
  },
  args: {
    theme: 'edit',
    children: 'Editar',
  },
  argTypes: {
    onClick: {
      control: {
        type: 'object',
      },
      table: {
        category: 'Events',
        action: 'clicked',
        description: 'optional onClick ``` (() => void) ```',
        default: 'false',
      },
    },
  },
};
export const Salvar: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Salvar')).toBeInTheDocument();
  },
  args: {
    theme: 'save',
    children: 'Salvar',
  },
  argTypes: {
    onClick: {
      control: {
        type: 'object',
      },
      table: {
        category: 'Events',
        action: 'clicked',
        description: 'optional onClick ``` (() => void) ```',
        default: 'false',
      },
    },
  },
};
