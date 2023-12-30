import { animated, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import {
  artistInfo,
  circle,
  circleWrapper,
} from "@/pages/TopByMessagesPage/constants/animationVariants.ts";
import { calc, trans } from "@/app/helpers/calculations.ts";
import igorImg from "@/assets/murmaider.webp";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { names } from "@/pages/LoverBoyPage/constants/textConst.ts";

const LoverBoyPage = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 50 },
  }));

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
              <h1 key={index}>ЗОЛОТЕНЬКИЙ ДЖІМ БІМ СІГМА</h1>
            ))}
        </motion.div>
        <motion.div className="circle two" variants={circle}>
          {Array(30)
            .fill(null)
            .map((_, index) => (
              <h1 key={index}>ЗОЛОТЕНЬКИЙ ДЖІМ БІМ СІГМА</h1>
            ))}
        </motion.div>
        <motion.div className="circle three" variants={circle}>
          {Array(30)
            .fill(null)
            .map((_, index) => (
              <h1 key={index}>ЗОЛОТЕНЬКИЙ ДЖІМ БІМ СІГМА</h1>
            ))}
        </motion.div>
        <motion.div className="circle four" variants={circle}>
          {Array(30)
            .fill(null)
            .map((_, index) => (
              <h1 key={index}>ЗОЛОТЕНЬКИЙ ДЖІМ БІМ СІГМА</h1>
            ))}
        </motion.div>
        <motion.div className="circle five" variants={circle}>
          {Array(30)
            .fill(null)
            .map((_, index) => (
              <h1 key={index}>ЗОЛОТЕНЬКИЙ ДЖІМ БІМ СІГМА</h1>
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
              src={igorImg}
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
                Найдоросліша людина серверу стала
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
                @I'm So FUckIng BaD / murmaider / Ігор
              </motion.h1>
            </div>
            <div>
              <motion.p
                variants={artistInfo}
                initial="in"
                animate="anim"
                exit="out"
              >
                За цей рік він не випив стільки же віскі, як у минулому :((
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
          <Link to="/jett-baiter">
            <FaChevronUp style={{ color: "white" }} />
          </Link>
        </div>
        <div className="page-no">
          <p>
            <span>11</span> / 12
          </p>
        </div>
        <div className="next">
          <Link to="/">
            <FaChevronDown style={{ color: "white" }} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoverBoyPage;
