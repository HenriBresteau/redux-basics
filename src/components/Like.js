import React from "react";
import { addUserLike } from "../actions/user.action";

const Like = ({ post }) => {
  return (
    <div>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
