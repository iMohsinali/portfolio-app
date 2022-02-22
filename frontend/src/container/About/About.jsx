import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
const About = () => {
  const object = [
    {
      titile: "Web Developer",
      desc: "I am a Good Web developer",
      imgurl: images.about01,
    },
    {
      titile: "Web Design",
      desc: "I am a Good Web Desiging",
      imgurl: images.about02,
    },
    {
      titile: "UI/UX",
      desc: "I am a Good UI/UX Designer",
      imgurl: images.about03,
    },

    {
      titile: "Programmer",
      desc: "I am a Good Programmer",
      imgurl: images.about04,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I know That <span>Good Dev</span>
        <br /> mean<span> Good Busnisses</span>
      </h2>
      <div className="app__profiles">
        {object.map((e, i) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-items"
            key={e.titile + i}
          >
            <img src={e.imgurl} alt={e.titile} srcset="" />
            <h2 className="blod-text" style={{ marginTop: 20 }}>
              {e.titile}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {e.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
