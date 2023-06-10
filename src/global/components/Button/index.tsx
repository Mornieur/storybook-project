import React, { MouseEvent, ReactNode, KeyboardEvent } from 'react';
import * as S from './styles';
import { themeBtn } from './theme';

export interface IButton {
  children: ReactNode;
  theme: 'primary' | 'secondary' | 'save' | 'delete' | 'edit';
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  htmlFor?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IButton> = ({
  children,
  theme = 'primary',
  className = '',
  type = 'button',
  onClick,
  disabled = false,
  onKeyDown,
}: IButton) => {
  theme = theme as keyof typeof themeBtn;

  return (
    <S.Container
      type={type}
      themeBtn={themeBtn[theme]}
      className={className}
      onClick={onClick}
      disabled={disabled}
      onKeyDown={onKeyDown as any}
    >
      <S.SimpleContainer>
        <p>{children}</p>
      </S.SimpleContainer>
    </S.Container>
  );
};
