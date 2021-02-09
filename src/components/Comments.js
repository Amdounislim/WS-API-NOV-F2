import axios from "axios";
import React, { useState, useEffect } from "react";
import Comment from "./Comment";

const Comments = ({ match }) => {
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${match.params.id}`
      )
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getComments();
  }, [match]);

  return (
    <div>
      {comments.map((el, i) => (
        <Comment com={el} key={i} />
      ))}
    </div>
  );
};

export default Comments;
