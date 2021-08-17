import React from "react";
import './Section.css';

const Section = ({movie_url}) => {
  return (
    <section className='section-class'>
        <img className='img-carousel' src={movie_url} />
    </section>
  );
};

export default Section;


// import React from "react";
// import './Section.css';

// const Section = ({ children}) => {
//   return (
//     <section className='section-class'>

//       {children}
//     </section>
//   );
// };

// export default Section;