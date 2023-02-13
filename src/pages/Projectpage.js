import React from "react";

import Img1 from "../assets/images/img1.png";
import Img2 from "../assets/images/img2.png";
import Img3 from "../assets/images/img3.png";
import Img4 from "../assets/images/img4.png";
import Img5 from "../assets/images/img5.png";
import Img6 from "../assets/images/img6.png";
import Img7 from "../assets/images/img7.png";
import Img8 from "../assets/images/img8.png";

const images = [
  {
    id: 1,
    url: Img1,
  },
  {
    id: 2,
    url: Img2,
  },
  {
    id: 3,
    url: Img3,
  },
  {
    id: 4,
    url: Img4,
  },
  {
    id: 5,
    url: Img5,
  },
  {
    id: 6,
    url: Img6,
  },
  {
    id: 7,
    url: Img7,
  },
  {
    id: 8,
    url: Img8,
  },
];

const Projectpage = () => {

  return (
    <div id="app-page">
      <div id="page-project">
        <div className="hero-section">
          <div className="container">
            <div className="content">
              <h1>PROJECTS</h1>
              <h4>
                Here you will find some of the personal and clients projects
                that I created with each project containing its own case study
              </h4>
            </div>
          </div>
        </div>
        <div className="portfolio-sec">
          <div className="container">
            <div className="row">
                {images.map((data) => {
                  return (
                    <div className="image-box" key={data.id}>
                      <img src={data.url} alt="portolio" />
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectpage;
