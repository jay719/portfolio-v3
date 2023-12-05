import React from "react";
import { motion } from "framer-motion";
import { Heading, SubText, Link, Image } from "components/GeneralComponents";
import { useInView } from "react-intersection-observer";

const ServiceHeader = () => {
  // Ref and inView state for heading
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
  });

  // Ref and inView state for subtext
  const [subtextRef, subtextInView] = useInView({
    triggerOnce: true,
  });

  // Ref and inView state for link
  const [linkRef, linkInView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="service-heading-and-subtext-wrapper">
      <div className="services-sub-text-wrapper">
        <motion.h6
          variants={variants}
          initial="hidden"
          animate={subtextInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={subtextRef}
        >
          Services
        </motion.h6>
      </div>
      <div className="service-heading-wrapper">
        <motion.h2
          variants={variants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
          ref={headingRef}
        >
          Designs that solve problems, one product at a time.
        </motion.h2>
      </div>
      <Link
        href="/services"
        className="blog-item-read-the-article-wrapper w-inline-block"
        variants={variants}
        initial="hidden"
        animate={linkInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.6 }}
        ref={linkRef}
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
  );
};

export default ServiceHeader;
