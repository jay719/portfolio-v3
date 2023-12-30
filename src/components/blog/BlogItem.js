import React from "react";
import { motion } from "framer-motion";
import { Image, Link } from "components/GeneralComponents";
import { useInView } from "react-intersection-observer";
import { ReactComponent as WhiteArrowIcon } from "../../svgs/white-arrow.svg";

const BlogItem = ({ href, date, time, heading, readText, imgSrc }) => {
  const [dateRef, dateInView] = useInView({
    triggerOnce: true,
  });

  const [timeRef, timeInView] = useInView({
    triggerOnce: true,
  });

  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
  });

  const [readTextRef, readTextInView] = useInView({
    triggerOnce: true,
  });

  const [arrowRef, arrowInView] = useInView({
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      role="listitem"
      className="w-dyn-item"
      variants={itemVariants}
      initial="hidden"
      animate={dateInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Link
        href={href}
        className="blog-section-blog-item-wrapper w-inline-block"
      >
        <motion.div
          variants={itemVariants}
          ref={dateRef}
          className="blog-item-date-and-time-wrapper"
        >
          <motion.div className="blog-item-date-wrapper">
            <div className="text-block _14px white">{date}</div>
          </motion.div>
          <motion.div className="blog-item-dot"></motion.div>
          <motion.div ref={timeRef} className="blog-item-time-wrapper">
            <div className="text-block _14px white">{time}</div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          ref={headingRef}
          className="blog-item-heading-wrapper"
        >
          <h4 className="white">{heading}</h4>
        </motion.div>
        <motion.div
          variants={itemVariants}
          ref={readTextRef}
          className="blog-item-read-the-article-wrapper"
        >
          <motion.div className="blog-item-read-the-article-text-wrapper">
            <div className="text-block _18px white">{readText}</div>
          </motion.div>
          <motion.div className="blog-item-arrow-wrapper" ref={arrowRef}>
            <WhiteArrowIcon />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default BlogItem;
