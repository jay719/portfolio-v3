import React from "react";

import "../../styles/Blog.css";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import { blogItemsData } from "data/dummyData";

export default function BlogContainer() {
  return (
    <div className="blog-section" id="Blog">
      <div className="wrapper blog-homepage">
        <BlogHeader />
        <div className="blog-content-wrapper">
          <BlogContent blogItemsData={blogItemsData} />
        </div>
      </div>
    </div>
  );
}
