import "./index.scss";

import React, { Fragment, useEffect, useState } from "react";
// import { AuthContext } from "../../App";
import Title from "components/title";
// import BackButton from "components/back-button";
import PostCreate from "services/post_create";
import { Post } from "models/type";
import PostItem from "services/post_item";
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

  //Добавлени нового постав в список постов
  const handleCreate = (newPost: Post) => {
    console.log("Получен новый пост:", newPost);
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };
  return (
    <>
      <Title title="Home" desctiption="Please enter your text" />

      <div className="postlist">
        {/* <BackButton /> */}

        <PostCreate
          onCreate={handleCreate}
          placeholder="What is happening?!"
          button="Submit"
        />
        {/* <Fragment> */}
        <div className="postlist__item">
          {posts.map((post: any) => (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorEmail={post.author?.name || "Unknown Author"}
            />
          )) || []}
          {/* {data.isEmpty ? (
            <Alert message="Список постів пустий" />
          ) : (
            data.list.map((item) => (
              <Fragment key={item.id}>
                <PostItem {...item} />
              </Fragment>
            ))
          )} */}
        </div>
        {/* </Fragment> */}
      </div>
    </>
  );
};

export default PostList;
