import React from "react";

const TestimonialSlide = ({ testimonial }) => (
  <div className="testimonial-slide">
    <div className="testimonial-container">
      <div className="testimonial-image-wrapper">
        <img src={testimonial.image} alt="" className="image" />
        <div className="testimonial-slider-image-cover"></div>
      </div>
      <div className="testimonial-content">
        <div className="testimonial-quote-icon-wrapper">
          <img src={testimonial.quoteIcon} alt="" className="image contain" />
        </div>
        <div className="testimonial-content-wrapper">
          <h3 className="testimonial-content-text">{testimonial.text}</h3>
        </div>
        <div className="testimonial-name-and-position-wrapper">
          <div className="testimonial-name-wrapper">
            <div className="text-block testimonial-name">
              {testimonial.name}
            </div>
            <div className="text-block _18px">{testimonial.position}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialSlider = ({ testimonials }) => (
  <div className="testimonial-slider">
    {testimonials.map((testimonial, index) => (
      <TestimonialSlide key={index} testimonial={testimonial} />
    ))}
  </div>
);

const TestimonialSection = ({ testimonials }) => (
  <div className="testimonial-section">
    <div className="wrapper testimonial-headings">
      <div className="testimonial-heading-subtext-wrapper">
        <h6>Testimonials</h6>
      </div>
      <div className="testimonial-heading-wrapper">
        <h2>Word on the street</h2>
      </div>
    </div>
    <div className="wrapper testimonial-down">
      <TestimonialSlider testimonials={testimonials} />
    </div>
  </div>
);

export default TestimonialSection;
