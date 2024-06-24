import React, { useContext } from "react";
import { StoreData } from "./Blog";
import { useParams } from "react-router-dom";

const BlogId = () => {
  const { storeBlog } = useContext(StoreData);
  const { id } = useParams();
  const data = storeBlog[id];

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{data.head}</h2>
        <p className="card-text">{data.content}</p>
      </div>
    </div>
  );
};

export default BlogId;
