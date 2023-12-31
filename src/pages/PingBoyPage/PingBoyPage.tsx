import { animated, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import {
  artistInfo,
  circle,
  circleWrapper,
} from "@/pages/TopByMessagesPage/constants/animationVariants.ts";
import { calc, trans } from "@/app/helpers/calculations.ts";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { names } from "@/pages/PingBoyPage/constants/textConst.ts";
import loader from "@/assets/loader.gif";
import { useEffect, useState } from "react";

const PingBoyPage = () => {
  const avgPingValues = [142, 23, 365, 9999, 40, 20643];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 50 },
  }));

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the index to the next value in the array
      setCurrentIndex((prevIndex) => (prevIndex + 1) % avgPingValues.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [avgPingValues.length]);

  return (
    <motion.div className="TopArtist">
      <motion.div
        className="initial-animate-screen"
        variants={circleWrapper}
        initial="in"
        animate="anim"
        onAnimationComplete={() => {
          const element = document.querySelector(".initial-animate-screen");

          if (element !== null) {
            element.classList.add("display-none");
          }
        }}
      >
        <motion.div className="circle" id="one" variants={circle}>
          {Array(30)
            .fill(null)
            .map((_, index) => (
              <h1 key={index}>LOADING...</h1>
            ))}
        </motion.div>
        <motion.div className="circle two" variants={circle}>
          {Array(30)
            .fill(null)
            .map((_, index) => (
              <h1 key={index}>LOADING...</h1>
            ))}
        </motion.div>
        <motion.div className="circle three" variants={circle}>
          {Array(30)
            .fill(null)
            .map((_, index) => (
              <h1 key={index}>LOADING...</h1>
            ))}
        </motion.div>
        <motion.div className="circle four" variants={circle}>
          {Array(30)
            .fill(null)
            .map((_, index) => (
              <h1 key={index}>LOADING...</h1>
            ))}
        </motion.div>
        <motion.div className="circle five" variants={circle}>
          {Array(30)
            .fill(null)
            .map((_, index) => (
              <h1 key={index}>LOADING...</h1>
            ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="top-artist-cont"
        onMouseMove={({ clientX: x, clientY: y }) => {
          set({ xys: calc(x, y) });
        }}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.3 }}
      >
        <animated.div
          className="top-artist-card"
          style={{ transform: props.xys.to(trans) }}
        >
          <div className="artist-img">
            <motion.img
              variants={artistInfo}
              initial="in"
              animate="anim"
              exit="out"
              src={loader}
              alt="avatar image"
            />
          </div>
          <div className="text">
            <div>
              <motion.h2
                variants={artistInfo}
                initial="in"
                animate="anim"
                exit="out"
                className="text-4xl mb-2"
              >
                Щось нічого не грузить
                <br />
                за цей 2023 рік:
              </motion.h2>
            </div>
            <div style={{ transform: "translateZ(75px)" }}>
              <motion.h1
                className="text-3xl mb-2"
                variants={artistInfo}
                initial="in"
                animate="anim"
                exit="out"
              >
                @Beatraid
              </motion.h1>
            </div>
            <div>
              <p>Loading...</p>
              <motion.p variants={artistInfo}>
                const avg_ping =
                <motion.span
                  key={currentIndex}
                  variants={artistInfo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {` ${avgPingValues[currentIndex]}`} ms.
                </motion.span>
              </motion.p>
            </div>
          </div>
        </animated.div>
      </motion.div>
      <motion.div
        className="album-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.1 }}
      >
        <motion.p
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
          style={{ fontSize: `${110 / (600 / 40)}vw` }}
        >
          {names}
        </motion.p>
      </motion.div>
      <motion.div
        className="pagination"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="prev">
          <Link to="/important-clown">
            <FaChevronUp style={{ color: "white" }} />
          </Link>
        </div>
        <div className="page-no">
          <p>
            <span>5</span> / 11
          </p>
        </div>
        <div className="next">
          <Link to="/immo-player">
            <FaChevronDown style={{ color: "white" }} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PingBoyPage;
