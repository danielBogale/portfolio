import React, { useEffect } from "react";
import ReactGA from "react-ga";
import CommonBlog from "./CommonBlog";

const Blog = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return <CommonBlog items={true} count={6} />;
};

export default Blog;
