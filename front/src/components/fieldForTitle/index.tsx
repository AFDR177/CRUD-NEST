import { FieldForTitleProps } from "models/type";
import "./index.scss";

export default function FieldForTitle({
  titleField,
  value,
  onChange,
}: FieldForTitleProps) {
  return (
    <div className="form">
      {titleField ? (
        <div className="form__item">
          <label htmlFor="title" className="field__label">
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={value}
            placeholder="Enter title post"
            className="field__input"
            onChange={onChange} // Вызываем onChange родительского компонента
          />
        </div>
      ) : null}
    </div>
  );
}
