import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import Blogs from "./Blogs";
import BlogId from "./BlogId";
import { NavLink } from "react-router-dom";
import { createContext, useState } from "react";

export const StoreData = createContext();

const Blog = () => {
  const [storeBlog, setStoreBlog] = useState([]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={"/"}>
            BlogApp
          </NavLink>
          <div className="navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/blogs"}>
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <StoreData.Provider value={{ storeBlog, setStoreBlog }}>
          <Routes>
            <Route path={"/"} element={<CreateBlog />} />
            <Route path={"/home"} element={<CreateBlog />} />
            <Route path={"/blogs"} element={<Blogs />} />
            <Route path={"/blogs/:id"} element={<BlogId />} />
          </Routes>
        </StoreData.Provider>
      </div>
    </>
  );
};

export default Blog;
