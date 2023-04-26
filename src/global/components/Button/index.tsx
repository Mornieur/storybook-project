import React, { MouseEvent, ReactNode } from "react";
import * as S from "./styles";
import { themeBtn } from "./theme";

export interface IButton {
  children: ReactNode;
  theme: "primary" | "secondary" | "save" | "exclude" | "edit";
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  className?: string;
  type?: "submit" | "button" | "reset";
  form?: any;
  disabled?: boolean;
  htmlFor?: string;
  onKeyDown?: (e: MouseEvent<HTMLElement>) => void;
}

export const Button: React.FC<IButton> = ({
  children,
  theme,
  className,
  type,
  onClick,
  form,
  disabled,
  onKeyDown,
}: IButton) => {
  theme = theme as keyof typeof themeBtn;

  return (
    <S.Container
      form={form}
      type={type ? type : "button"}
      themeBtn={themeBtn[theme]}
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
};
