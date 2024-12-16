import { FieldForTitleProps } from "models/type";
import "./index.scss";
import { NAME_FIELD } from "../../models/const";
import { useState } from "react";

export default function FieldForTitle({ title, onChange }: FieldForTitleProps) {
  return (
    <div className="form">
      {title ? (
        <div className="form__item">
          <label htmlFor="title" className="field__label">
            Title:
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter title post"
            className="field__input"
            onChange={onChange} // Вызываем onChange родительского компонента
          />
        </div>
      ) : null}
    </div>
  );
}
