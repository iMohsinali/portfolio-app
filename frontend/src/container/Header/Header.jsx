import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-bage">
          <div className="bage-camp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Mohsin Ali</h1>
            </div>
          </div>
          <div className="tag-camp app__flex">
            <p className="p-text">Web develper</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="" srcset="" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          src={images.circle}
          className="overlay_circle"
        ></motion.img>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circle"
      >
        {[images.flutter, images.sass, images.redux].map((c, i) => (
          <div className="circle-cmp app__flex" key={`c-${i}`}>
            <img src={c} alt="" srcset="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
