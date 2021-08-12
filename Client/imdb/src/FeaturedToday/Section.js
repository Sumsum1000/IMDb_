import React from "react";
import './Section.css';

const Section = ({ children }) => {
  return (
    <section className='section-class'>
      {children}
    </section>
  );
};

export default Section;
