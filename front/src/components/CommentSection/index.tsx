import React, { useState, useEffect } from "react";
import "./index.scss";

interface Comment {
  id: number;
  content: string;
  author: string;
}

interface CommentSectionProps {
  postId: number;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const [authorName, setAuthorName] = useState("");

  // Загружаем комментарии
  useEffect(() => {
    fetch(`/comments/post/${postId}`)
      .then((res) => {
        console.log("Данные комментов из сервера==>", res);
        return res.json();
      })
      .then((data) => {
        console.log("Data==>", data);
        return setComments(data);
      })
      .catch((error) =>
        console.error("Ошибка при загрузке комментариев", error)
      );
  }, [postId]);

  // Отправка комментария на сервер
  const handleCommentSubmit = () => {
    if (commentContent.trim() && authorName.trim()) {
      console.log("postId перед отправкой:", postId);

      const newComment = {
        content: commentContent,
        postId,
        author: authorName,

        // author: "Alexxx", // пока так для проверки
      };

      fetch("/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      })
        .then((res) => {
          console.log("Новый коммент из сервера==>", res);
          return res.json();
        })
        .then((data) => {
          setComments((prev) => [data, ...prev]); // новый комментарий в начало
          setCommentContent("");
          setAuthorName("");
          setShowCommentBox(false);
        })
        .catch((error) =>
          console.error("Ошибка при отправке комментария", error)
        );
    }
  };

  return (
    <div className="comment-section">
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p>
              <strong>{comment.author}</strong>:
            </p>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowCommentBox(!showCommentBox)}
        className="button__comments click"
      >
        {showCommentBox ? "Скрыть форму" : "Оставить комментарий"}
      </button>

      {showCommentBox && (
        <div className="comment-form">
          <input
            type="text"
            placeholder="Ваше имя"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
          <textarea
            placeholder="Напишите ваш комментарий"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <button onClick={handleCommentSubmit}>Отправить</button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
