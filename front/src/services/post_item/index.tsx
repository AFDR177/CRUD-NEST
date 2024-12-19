import Box from "components/box";
import CommentSection from "components/CommentSection";
import Grid from "components/grid";
import { PostItemProps } from "models/type";
import React from "react";

export default function PostItem({
  id,
  title,
  content,
  authorEmail,
}: PostItemProps) {
  return (
    <Grid>
      {/* <Box> */}
      <div className="post-item">
        <h3 className="post-item__title">
          {id}. {title}
        </h3>
        <Box className="post-item__box">
          <p className="post-item__content">{content}</p>
        </Box>
        <div className="post-item__comment">
          <span className="post-item__author">{authorEmail}</span>
          <CommentSection postId={id} />
        </div>
      </div>
      {/* </Box> */}
    </Grid>
  );
}
