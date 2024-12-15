import "./index.scss";

import React, { Fragment } from "react";
// import { AuthContext } from "../../App";
import Title from "components/title";
import BackButton from "components/back-button";
import PostCreate from "services/post_create";
;

export const PostList: React.FC = () => {
  // const auth = useContext(AuthContext);

  const handleChenge = () => console.log("sdfegrg")
  return (
    <>
      <Title title="Home" desctiption="Please enter your text" />
      
      <div className="postlist">
      <BackButton />
      
      <PostCreate
            onCreate ={handleChenge}
            placeholder="What is happening?!"
            button="Submit"
          />  
          <Fragment>
            Тут Список постов
          {/* {data.isEmpty ? (
            <Alert message="Список постів пустий" />
          ) : (
            data.list.map((item) => (
              <Fragment key={item.id}>
                <PostItem {...item} />
              </Fragment>
            ))
          )} */}
        </Fragment>    
      </div>
      
    </>
  );
};

export default PostList;
