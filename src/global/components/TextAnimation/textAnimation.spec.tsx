import { render } from '@testing-library/react';
import { TextAnimation } from '.';
import '@testing-library/jest-dom/extend-expect';

describe('<TextAnimation>', () => {
  it('should render text animation component', () => {
    const { getByText, queryByText } = render(
      <TextAnimation type="text" text="Text Animation" isOpen={true} />
    );

    const titleElement = queryByText('text');
    const textAnimationElement = getByText('Text Animation');

    expect(textAnimationElement).toBeInTheDocument();

    expect(titleElement).toBeNull();
  });

  it('should not render text animation component when isOpen is false', () => {
    const { queryByText } = render(
      <TextAnimation type="text" text="Text Animation" isOpen={false} />
    );

    const textAnimationElement = queryByText('Text Animation');
    expect(textAnimationElement).toBeNull();
  });
});
