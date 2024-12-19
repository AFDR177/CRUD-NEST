import React from 'react';
import { Comment } from 'models/type';

const CommentItem: React.FC<Comment> = ({ content }) => {
  return (
    <div className="comment-item">
      <p>{content}</p>

    </div>
  );
};

export default CommentItem;
