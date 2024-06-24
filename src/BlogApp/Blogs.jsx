import React, { useContext } from "react";
import { StoreData } from "./Blog";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const { storeBlog } = useContext(StoreData);

  return (
    <div className="row">
      {storeBlog.map((item) => (
        <div className="col-md-4" key={item.id}>
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">{item.head}</h2>
              <p className="card-text">{item.content}</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate(`${item.id}`)}
              >
                Read Blog...
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
