import { PostItemProps } from "models/type";
import React from "react";

export default function PostItem({
  id,
  title,
  content,
  authorEmail,
}: PostItemProps) {
  return (
    <div className="post-item">
      <h3 className="post-item__title">Title: {title}</h3>
      <p className="post-item__content">Content: {content}</p>
      <span className="post-item__author">
        PostID: {id} | Author: {authorEmail}
      </span>
    </div>
  );
}
