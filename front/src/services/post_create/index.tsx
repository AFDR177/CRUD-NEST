import { PostCreateProps } from "models/type";
import React, { useState } from "react";
import FormFieldPost from "../../components/formfieldpost";

export default function PostCreate({
  onCreate,
  placeholder,
  button,
}: PostCreateProps) {
  type Draft = {
    id?: number; // ID может быть undefined, пока сервер его не создаст
    title: string;
    content: string;
    published: boolean;
    authorName?: string;
  };

  const [draft, setDraft] = useState<Draft>({
    title: "",
    content: "",
    published: false,
  }); // для хранения черновика

  const saveOrUpdateDraftOnServer = async (
    field: string,
    value: string,
    published?: boolean
  ) => {
    try {
      let updateDraft;
      if (!draft.id) {
        // Если черновик ещё не создан на сервере
        const response = await fetch("/post", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            [field]: value,
            title: draft.title,
            content: draft.content,
            published: false,
            authorEmail: "alex1@gmail.com",
          }),
        });

        const savedDraft = await response.json();

        // Обновляем локальный черновик с новым ID
        updateDraft = {
          ...draft,
          authorName: savedDraft.author.name,
          id: savedDraft.id,
          [field]: value,
        };
        setDraft(updateDraft);
      } else {
        // Если черновик уже существует, обновляем его
        const response = await fetch(`/post/${draft.id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...draft,
            [field]: value,
          }),
        });

        const updatedData = await response.json();

        updateDraft = {
          ...updatedData,
          [field]: value,
          authorName: draft.authorName,
        };

        setDraft(updateDraft);
      }
    } catch (error) {
      console.error("Ошибка при создании или обновлении черновика:", error);
    }
  };

  const handleSubmit = async () => {
    if (!draft.id) {
      console.log("Черновик не создан, нечего публиковать");
      return;
    }

    try {
      const res = await fetch(`post/publish/${draft.id}`, {
        method: "PUT",
      });

      const publishedPost = await res.json();
      publishedPost.authorName = draft.authorName;

      onCreate(publishedPost);
      setDraft({ title: "", content: "", published: false });
      console.log("очистка draft===>", draft);
    } catch (err) {
      console.log("Ошибка публикации поста:", err);
    }
  };

  // Обновление черновика
  const updateDraft = (field: string, value: string) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
    saveOrUpdateDraftOnServer(field, value);
  };

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
