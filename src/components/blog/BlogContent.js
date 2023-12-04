import React from "react";
import { motion } from "framer-motion";
import BlogItem from "./BlogItem"; // Assuming the path to BlogItem is correct
import { useInView } from "react-intersection-observer";

const BlogContent = ({ blogItemsData }) => {
  const [listRef, listInView] = useInView({
    triggerOnce: true,
  });

  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-dyn-list"
      initial="hidden"
      animate={listInView ? "visible" : "hidden"}
      variants={listVariants}
      transition={{ duration: 0.5, delay: 1 }}
      ref={listRef}
    >
      <div role="list" className="w-dyn-items">
        {blogItemsData.map((item, index) => (
          <motion.div
            key={index}
            variants={listVariants}
            initial="hidden"
            animate={listInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.3 * index }}
          >
            <BlogItem {...item} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogContent;
