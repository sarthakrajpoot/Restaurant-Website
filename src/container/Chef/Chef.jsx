import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cororant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            In our kitchen at Gericht, our team of skilled chefs is driven by a
            passion for culinary artistry.
          </p>
        </div>
        <p className="p__opensans">
          With a focus on innovation and quality, they craft dishes that reflect
          our commitment to excellence. Each chef brings a unique perspective
          and expertise to our menu, ensuring a diverse array of flavors and
          experiences for our guests. Together, they collaborate harmoniously to
          elevate every dining occasion, creating unforgettable moments with
          each delicious bite.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
