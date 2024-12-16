import "./index.scss";

import { FormFieldPostProps } from "../../models/type";
import { useState } from "react";
import Button from "components/button";
import BackButton from "components/back-button";
import FieldForTitle from "components/fieldForTitle";

export default function FormFieldPost({
  onSubmit,
  placeholder,
  button,
}: FormFieldPostProps) {
  //
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const handleChangeContent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setContent(e.target.value);

  const handleChangeTitle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTitle(e.target.value);

  const handleSubmit = () => {
    // console.log("title==>", title, "content==>", content);
    if (content.length === 0) return null;

    if (content.length > 0 && title.length > 0) {
      onSubmit({ title, content }); // Передаём данные в родительский компонент
    } else if (content.length > 0 && title.length === 0) {
      onSubmit({ title: "Без названия", content });
    } else {
      console.log("заполни поля");
      // throw new Error("Заполнить все поля");
    }
  };

  const isDisabled = content.length === 0;

  return (
    <div className="formpostlist">
      <BackButton />

      <div className="formpost">
        <div className="formpostlist">
          <FieldForTitle title={true} onChange={handleChangeTitle} />

          <label htmlFor="title" className="field__label">
            Text:
          </label>
          <textarea
            onChange={handleChangeContent}
            value={content}
            rows={4}
            placeholder={placeholder}
            className="formpost__field"
          ></textarea>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={isDisabled}
          className="button button--primary"
        >
          {button}
        </Button>
      </div>
    </div>
  );
}
