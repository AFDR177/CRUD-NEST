import { ChangeEventHandler, CSSProperties } from "react";

export type TypeFieldName = {
  EMAIL: string;
  NAME_USER: string;
  // USER_ID: string;
  PASSWORD: string;
  NEW_PASSWORD: string;
  CODE: string;
  TITLE_POST: string;
  TEXT_POST: string;
};

export type TypeFieldError = {
  IS_EMPTY: string;
  IS_BIG: string;
  EMAIL: string;
  PASSWORD: string;
  PASSWORD_AGAIN: string;
  NAME_USER: string;
};

export type AlertProps = {
  text?: string;
  success?: boolean;
};

export type ButtonProps = {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode | undefined;
  style?: CSSProperties | undefined;
};

export interface FormFieldProps {
  email: boolean;
  name: boolean;
  button: string;
  alert: boolean;
  link: React.ReactNode;
  questionOff: boolean;
  question: string;
}

export interface PostCreateProps {
  onCreate: () => void;
  placeholder: string;
  button: string;
}

export interface FormFieldPostProps {
  onSubmit: any;
  placeholder: string;
  button: string;
}

export interface FieldForTitleProps {
  title: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
