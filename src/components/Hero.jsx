import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import Wrapper from "../assets/wrappers/Hero";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          design your <br /> comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum rerum saepe, libero, esse facilis, architecto sapiente
          error ut fuga repellendus.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="Table img" className="main-img" />
        <img src={heroBcg2} alt="Person is working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

export default Hero;
