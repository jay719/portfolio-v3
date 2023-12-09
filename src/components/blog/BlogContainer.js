import React from "react";

import "../../styles/Blog.css";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";

export default function BlogContainer() {
  const blogItemsData = [
    {
      href: "/blog/design-tips-for-designers-that-cover-everything-you-need",
      date: "April 16, 2021",
      time: "6 mins",
      heading: "Design tips for designers, that cover everything you need",
      readText: "Read the article",
      imgSrc:
        "https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584aacad011eafeb61bc_Vector-2.svg",
    },
    {
      href: "/blog/how-to-build-rapport-with-your-web-design-clients",
      date: "April 16, 2021",
      time: "5 mins",
      heading: "How to build rapport with your web design clients",
      readText: "Read the article",
      imgSrc:
        "https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584aacad011eafeb61bc_Vector-2.svg",
    },
    {
      href: "/blog/top-6-free-website-mockup-tools-2021",
      date: "April 16, 2021",
      time: "5 mins",
      heading: "Top 6 free website mockup tools 2021",
      readText: "Read the article",
      imgSrc:
        "https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584aacad011eafeb61bc_Vector-2.svg",
    },
    {
      href: "/blog/design-tips-for-designers-that-cover-everything-you-need",
      date: "April 16, 2021",
      time: "6 mins",
      heading: "Design tips for designers, that cover everything you need",
      readText: "Read the article",
      imgSrc:
        "https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584aacad011eafeb61bc_Vector-2.svg",
    },
    {
      href: "/blog/how-to-build-rapport-with-your-web-design-clients",
      date: "April 16, 2021",
      time: "5 mins",
      heading: "How to build rapport with your web design clients",
      readText: "Read the article",
      imgSrc:
        "https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584aacad011eafeb61bc_Vector-2.svg",
    },
    {
      href: "/blog/top-6-free-website-mockup-tools-2021",
      date: "April 16, 2021",
      time: "5 mins",
      heading: "Top 6 free website mockup tools 2021",
      readText: "Read the article",
      imgSrc:
        "https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584aacad011eafeb61bc_Vector-2.svg",
    },
  ];

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
