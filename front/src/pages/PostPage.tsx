import "../styles/postpage.scss";
import Page from "components/page";

import React from "react";
import PostList from "services/post_list";



export const PostPage: React.FC = () => {
  return (
    <Page className="postpage">
      <PostList />
    </Page>
  );
};