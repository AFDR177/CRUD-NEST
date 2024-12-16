import "./index.scss";
import "../../styles/click.scss";
import { ButtonProps } from "models/type";

export default function Button({
  children,
  style,
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} click`}
      style={style}
      disabled={undefined}
    >
      {children}
    </button>
  );
}
