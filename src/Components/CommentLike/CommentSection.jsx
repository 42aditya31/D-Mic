import React from "react";
import CommentContainer from "./CommentContainer";
import AddComment from "./AddComment";

const CommentSection = () => {
  return (
    <div>
      {/* <AddComment/> */}
      <AddComment
        userId={3}
        postId={1}
        onCommentPosted={() => console.log("Comment posted!")}
      />
      <CommentContainer />
    </div>
  );
};

export default CommentSection;
