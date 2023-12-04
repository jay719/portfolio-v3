import { Image, Link } from "components/GeneralComponents";
import React from "react";

const BlogItem = ({ href, date, time, heading, readText, imgSrc }) => (
  <div role="listitem" className="w-dyn-item">
    <Link href={href} className="blog-section-blog-item-wrapper w-inline-block">
      <div className="blog-item-date-and-time-wrapper">
        <div className="blog-item-date-wrapper">
          <div className="text-block _14px white">{date}</div>
        </div>
        <div className="blog-item-dot"></div>
        <div className="blog-item-time-wrapper">
          <div className="text-block _14px white">{time}</div>
        </div>
      </div>
      <div className="blog-item-heading-wrapper">
        <h4 className="white">{heading}</h4>
      </div>
      <div className="blog-item-read-the-article-wrapper">
        <div className="blog-item-read-the-article-text-wrapper">
          <div className="text-block _18px white">{readText}</div>
        </div>
        <div className="blog-item-arrow-wrapper">
          <Image src={imgSrc} loading="lazy" alt="" />
        </div>
      </div>
    </Link>
  </div>
);

export default BlogItem;
