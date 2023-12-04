import React from "react";
import { Heading, Image, Link, SubText } from "components/GeneralComponents";
import BlogItem from "./BlogItem";
import "../../styles/Blog.css";

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
  ];

  return (
    <div className="blog-section">
      <div className="wrapper blog-homepage">
        <div className="blog-heading-and-subtext-wrapper">
          <div className="blog-subtext-wrapper">
            <SubText text="Blogs" />
          </div>
          <div className="blog-heading-wrapper">
            <Heading text="Latest Blogs" className="white blogs" />
          </div>
          <Link
            href="/blog"
            className="blog-item-read-the-article-wrapper w-inline-block"
          >
            <div className="blog-item-read-the-article-text-wrapper">
              <div className="text-block _18px white">View all</div>
            </div>
            <div className="blog-item-arrow-wrapper">
              <Image
                src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584aacad011eafeb61bc_Vector-2.svg"
                loading="lazy"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="blog-content-wrapper">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items">
              {blogItemsData.map((item, index) => (
                <BlogItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
