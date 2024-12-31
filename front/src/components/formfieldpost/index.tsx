import "./index.scss";

import { FormFieldPostProps } from "../../models/type";
// import { useState } from "react";
import Button from "components/button";
import BackButton from "components/back-button";
import FieldForTitle from "components/fieldForTitle";
import Grid from "components/grid";

export default function FormFieldPost({
  title,
  content,
  onSubmit,
  placeholder,
  button,
  onTitleChange,
  onContentChange,
}: FormFieldPostProps) {
  const handleChangeContent = (e: any) => onContentChange(e.target.value);
  const handleChangeTitle = (e: any) => onTitleChange(e.target.value);

  const handleSubmit = () => {
    if (content.length === 0) return null;

    if (content.length > 0 && title.length > 0) {
      onSubmit({ title, content, published: true }); // Передаём данные в родительский компонент
    } else if (content.length > 0 && title.length === 0) {
      onSubmit({ title: "Без названия", content });
    } else {
      throw new Error("Заполнить все поля");
    }
  };

  const isDisabled = content.length === 0;

  return (
    <Grid>
      <div className="formpost">
        <FieldForTitle
          titleField={true}
          value={title}
          onChange={handleChangeTitle}
        />

        <div className="formpost__content">
          <label htmlFor="title" className="field__label">
            Text:
          </label>
          <textarea
            onChange={handleChangeContent}
            rows={4}
            value={content}
            placeholder={placeholder}
            className="formpost__field"
          ></textarea>
        </div>

        <div className="buttons">
          <BackButton />
          <Button
            onClick={handleSubmit}
            disabled={isDisabled}
            className="button_kvadrat button--primary"
          >
            {button}
          </Button>
        </div>
      </div>
    </Grid>
  );
}
