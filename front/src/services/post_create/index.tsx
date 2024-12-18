import { PostCreateProps } from "models/type";
import React, { useState } from "react";
import FormFieldPost from "../../components/formfieldpost";

export default function PostCreate({
  onCreate,
  placeholder,
  button,
}: PostCreateProps) {
  const [draft, setDraft] = useState({ title: "", content: "" }); // для хранения черновика

  const handleSubmit = async () => {
    try {
      const response = await fetch("/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...draft,
          authorEmail: "alex@gmail.com",
        }),
      });

      const newPost = await response.json();
      onCreate(newPost); // Передаем новый пост в родительский компонент

      // Очистка
      setDraft({ title: "", content: "" });
    } catch (error) {
      console.error("Ошибка при создании черновика:", error);
    }
  };

  // Обновление черновика
  const updateDraft = (field: string, value: string) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
  };

  // const hundleSubmit = (data: {
  //   // id: number;
  //   title: string;
  //   content: string;
  // }) => {
  //   console.log("Полученные данные:", data);

  //   //временно добавлю атора, для проверки отправки на сервер
  //   const dataWithAuthor = {
  //     ...data,
  //     authorEmail: "alex@gmail.com",
  //   };

  //   console.log("Полученные данные с автором:", dataWithAuthor);

  //   fetch("/post", {
  //     //тут короткий путь для того чтобы обойти CORS через proxy в packege.json
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(dataWithAuthor),
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Ошибка при создании поста");
  //       }
  //       return res.json();
  //     })
  //     .then((newPost) => {
  //       // console.log("Post created:", newPost);
  //       // console.log("Post id:", newPost.id);

  //       if (onCreate) {
  //         onCreate(newPost); // Передача данных в PostList
  //       }
  //     })
  //     .catch((error) => console.error("Error:", error));
  // };

  return (
    <div>
      <FormFieldPost
        placeholder={placeholder}
        button={button}
        onSubmit={handleSubmit}
        title={draft.title} // Передаем значение черновика
        content={draft.content}
        onTitleChange={(value: any) => updateDraft("title", value)} // Обновляем заголовок
        onContentChange={(value: any) => updateDraft("content", value)}
      />
    </div>
  );
}
