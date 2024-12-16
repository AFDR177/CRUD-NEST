import { PostCreateProps } from "models/type";
import React from "react";
import FormFieldPost from "../../components/formfieldpost";

export default function PostCreate({
  onCreate,
  placeholder,
  button,
}: PostCreateProps) {
  const hundleSubmit = (data: { title: string; content: string }) => {
    console.log("Полученные данные:", data);

    //временно добавлю атора, для проверки отправки на сервер
    const dataWithAuthor = {
      ...data,
      authorEmail: "alex@gmail.com",
    };

    console.log("Полученные данные с автором:", dataWithAuthor);

    fetch("/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataWithAuthor),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Post created:", result);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <FormFieldPost
        placeholder={placeholder}
        button={button}
        onSubmit={hundleSubmit}
      />
    </div>
  );
}
