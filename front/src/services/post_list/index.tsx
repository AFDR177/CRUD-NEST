import "./index.scss";

import React, { useEffect, useState } from "react";
// import { AuthContext } from "../../App";
import Title from "components/title";
// import BackButton from "components/back-button";
import PostCreate from "services/post_create";
import { Post } from "models/type";
import PostItem from "services/post_item";
import Box from "components/box";
import Grid from "components/grid";
//
//
//

export const PostList: React.FC = () => {
  // const auth = useContext(AuthContext);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/post/feed")
      .then((res) => res.json())
      .then((data: Post[]) => {
        const sortedPosts = data.sort((a, b) => b.id - a.id);
        setPosts(sortedPosts);
      })
      .catch((error) => console.error("Ошибка при загрузке постов:", error));
  }, []);

  const handleCreate = (newPost: Post) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <Grid>
      <Box className="box--big">
        <Title title="Home" desctiption="" />
        <Grid>
          <div className="postlist">
            <PostCreate
              onCreate={handleCreate}
              placeholder="What is happening?!"
              button="Submit"
            />

            <div className="postlist__item">
              {posts.map((post: any) => (
                <PostItem
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  content={post.content}
                  authorEmail={post.authorName || "Unknown Author"}
                />
              )) || []}
            </div>
          </div>
        </Grid>
      </Box>
    </Grid>
  );
};

export default PostList;
