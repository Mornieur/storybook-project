import type { Meta, StoryObj } from '@storybook/react';
import { TextAnimation } from '../../../../../global/components/TextAnimation';
import React from 'react';
import { Container } from '../../../../styles';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { globalViewports } from '../../../../styles/index';

const meta = {
  title: 'Global/components/TextAnimation',
  decorators: [
    (Story) => {
      return (
        <Container>
          <Story />
        </Container>
      );
    },
  ],
  excludeStories: /.*Data$/,
  component: TextAnimation,
  argTypes: {
    text: { control: 'text' },
    type: { control: 'text' },
    isOpen: { control: 'boolean' },
  },
  parameters: {
    customEventPanel: [
      {
        eventName: 'event:example',
      },
      {
        eventName: 'my:event',
        eventData: {
          opt: 23,
        },
        selector: '.selector',
      },
      {
        eventName: 'my:otherevent',
        eventData: {
          foo: 23,
        },
      },
    ],
  },
} satisfies Meta<typeof TextAnimation>;

export default meta;

type Story = StoryObj<typeof TextAnimation>;

export const Title: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Text Example')).toBeInTheDocument();
  },
  args: {
    type: 'title',
    text: 'Text Example',
    isOpen: true,
  },

  parameters: {
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      defaultViewport: 'responsive',
      viewports: {
        globalViewports,
      },
    },
  },
};
