import React, { useContext, useState } from "react";
import { StoreData } from "./Blog";

const CreateBlog = () => {
  const [head, setHead] = useState("");
  const [content, setContent] = useState("");

  const { storeBlog, setStoreBlog } = useContext(StoreData);

  const handleBlog = () => {
    setStoreBlog([...storeBlog, { head, content, id: storeBlog.length }]);
    setHead("");
    setContent("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">Create a New Blog</h1>
        <div className="mb-3">
          <label className="form-label">Blog Name:</label>
          <input
            type="text"
            className="form-control"
            value={head}
            onChange={(e) => setHead(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Blog Content:</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleBlog}>
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
