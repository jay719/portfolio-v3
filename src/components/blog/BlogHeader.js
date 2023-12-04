import React from "react";
import { motion } from "framer-motion";
import { Heading, Image, Link, SubText } from "components/GeneralComponents";
import { useInView } from "react-intersection-observer";

export default function BlogHeader() {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
  });

  const [subtextRef, subtextInView] = useInView({
    triggerOnce: true,
  });

  const [linkRef, linkInView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="blog-heading-and-subtext-wrapper"
      initial="hidden"
      animate={headingInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.5 }}
      ref={headingRef}
    >
      <motion.div
        className="blog-subtext-wrapper"
        initial="hidden"
        animate={subtextInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={subtextRef}
      >
        <SubText text="Blogs" />
      </motion.div>
      <motion.div
        className="blog-heading-wrapper"
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.4 }}
        ref={headingRef}
      >
        <Heading text="Latest Blogs" className="white blogs" />
      </motion.div>
      <Link
        href="/blog"
        className="blog-item-read-the-article-wrapper w-inline-block"
        initial="hidden"
        animate={linkInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.6 }}
        ref={linkRef}
      >
        <motion.div className="blog-item-read-the-article-text-wrapper">
          <div className="text-block _18px white">View all</div>
        </motion.div>
        <motion.div className="blog-item-arrow-wrapper">
          <Image
            src="https://assets.website-files.com/5fef5619b640934b33c2385e/5fef584aacad011eafeb61bc_Vector-2.svg"
            loading="lazy"
            alt=""
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
