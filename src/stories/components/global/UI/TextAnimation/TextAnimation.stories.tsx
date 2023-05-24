import type { Meta, StoryObj } from '@storybook/react';
import { TextAnimation } from '../../../../../global/components/TextAnimation';
import React from 'react';
import { generateLivePreviewStory } from 'storybook-addon-jarle-monaco';
import { Container } from '../../../../styles';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TextAnimation> = {
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
};

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
        mobileS: {
          name: 'Mobile S',
          styles: {
            width: '320px',
            height: '568px',
          },
        },
        mobileM: {
          name: 'Mobile M',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        mobileL: {
          name: 'Mobile L',
          styles: {
            width: '425px',
            height: '812px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
  },
};

// use generateLivePreviewStory HoC to generate live preview
// export const TextAnimationEdit = generateLivePreviewStory({
//   code: `() => <TextAnimation type="title" isOpen={true} text="Text Example"  />`,
//   scope: {
//     TextAnimation,
//     foo: 'bar',
//   },
// });

// // use LivePreview alone, you need to set showEditor manually
// LiveEdit.parameters = {
//   liveEdit: {
//     showEditor: true,
//   },
// };
