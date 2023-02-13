import React from "react";
import { NavLink } from "react-router-dom";

//icons
import { FaHtml5, FaCss3Alt, FaWordpress,FaElementor ,FaGithub} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineAntDesign } from "react-icons/ai"
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiWoocommerce,
  SiBabel,
  SiRedux,
  SiWebpack,
  SiBootstrap,
  SiMaterialui,
  SiSemanticuireact,
  SiNpm,
  SiPhp,
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiDocker,
  SiBitbucket
} from "react-icons/si";

const Homepage = () => {
  return (
    <div id="app-page">
      <div id="page-home">
        <div className="hero-section">
          <div className="container">
            <div className="content">
              <h1>HEY, I'M KRUNAL KANOJIYA</h1>
              <h4>
                A Frontend focused engineer building the Frontend of Websites
                and Web Applications that leads to the success of the overall
                product
              </h4>
              <NavLink exact to="/projects">
                Projects
              </NavLink>
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="container">
            <div className="heading">
              <h2>ABOUT ME</h2>
              <p>
                Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
              </p>
            </div>
            <div className="row">
              <div className="content">
                <h3>Get to know me!</h3>
                <p>
                  I’m a <b>Web Designer</b> building the Front-end of Websites and
                  Web Applications that leads to the success of the overall
                  product. Check out some of my work in the Projects section.
                </p>
                <p>
                  I also like sharing content related to the stuff that I have
                  learned over the years in Web Development so it can help other
                  people of the Dev Community. Feel free to Connect or Follow me
                  on my <b>Linkedin</b> where I post useful content related to Web
                  Development and Programming
                </p>
                <p>
                  I’m open to Job <b>opportunities</b> where I can contribute, learn
                  and grow. If you have a good opportunity that matches my
                  skills and experience then don’t hesitate to contact me.
                </p>
              </div>
              <div className="tech">
                <div className="content">
                  <h3>My Skills!</h3>
                </div>
                <div className="tech-stacks">
                  <FaHtml5 />
                  <FaCss3Alt />
                  <IoLogoJavascript />
                  <SiReact />
                  <SiNextdotjs />
                  <SiRedux />
                  <SiVuedotjs />
                  <FaWordpress />
                  <SiWoocommerce />
                  <FaElementor />
                  <SiPhp />
                  <SiBabel />
                  <SiWebpack />
                  <SiBootstrap />
                  <AiOutlineAntDesign />
                  <SiMaterialui />
                  <SiSemanticuireact />
                  <SiNpm />
                  <SiFigma />
                  <SiAdobexd />
                  <SiSketch />
                  <SiDocker />
                  <FaGithub />
                  <SiBitbucket />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
