import { fireEvent, render } from '@testing-library/react';
import { Button } from '.';
import '@testing-library/jest-dom/extend-expect';

describe('<Button>', () => {
  it('should render button', () => {
    const { getByText, getByRole } = render(
      <Button theme="primary">button</Button>
    );

    const buttonElement = getByRole('button');
    const buttonTextElement = getByText('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonTextElement).toBeInTheDocument();
  });

  it('should call onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <Button theme="primary" onClick={onClickMock}>
        button
      </Button>
    );

    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should have a custom CSS class when className prop is provided', () => {
    const { getByRole } = render(
      <Button theme="primary" className="custom-button">
        button
      </Button>
    );

    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveClass('custom-button');
  });

  it('should be disabled when disabled prop is true', () => {
    const { getByRole } = render(
      <Button theme="primary" disabled>
        button
      </Button>
    );

    const buttonElement = getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  it('should have the specified type attribute', () => {
    const { getByRole } = render(
      <Button theme="primary" type="submit">
        button
      </Button>
    );

    const buttonElement = getByRole('button');
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });
});
