// import { Link } from "react-router-dom";

// const CTA = () => {
//   return (
//     <section className='cta'>
//       <p className='cta-text'>
//         Have a project in mind? <br className='sm:block hidden' />
//         Let’s build something together!
//       </p>
//       <Link to='/contact' className='btn'>
//         Contact
//       </Link>
//     </section>
//   );
// };

// export default CTA;

import { Link } from "react-router-dom";

const CTA = ({ buttonText, buttonLink, children }) => {
  return (
    <section className='cta'>
    
      <p className='cta-text'>
        {children}
      </p>

      <Link to={buttonLink} className='btn'>
        {buttonText}
      </Link>

    </section>
  );
};

export default CTA;

