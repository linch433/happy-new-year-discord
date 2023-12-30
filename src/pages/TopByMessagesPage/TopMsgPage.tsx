import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import "./styles/TopMsgPage.style.css";
import sanyaImg from "@/assets/juliet.webp";

const TopMsgPage = () => {
  const names = ["Саня", "Саньочек", "Санічка", "Конфуцій", "Солоденький"];

  const calc = (x, y) => [
    (window.innerHeight / 2 - y) / 50,
    (x - window.innerWidth / 2) / 50,
    1.1,
  ];

  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 50 },
  }));

  const circleWrapper = {
    in: {
      scale: 0,
      clipPath: "circle(500%)",
    },
    anim: {
      scale: [null, 1.2, 1],
      clipPath: "circle(0%)",
      transition: {
        delay: 0.2,
        duration: 4,
        times: [0, 0.8, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const circle = {
    in: { rotate: 0, y: "-50%", x: "-50%" },
    anim: {
      rotate: [null, -15, 0],
      transition: {
        duration: 2,
        times: [0, 0.3, 1],
      },
    },
  };

  const artistInfo = {
    in: { y: "110%" },
    anim: {
      y: 0,
      transition: {
        duration: 1,
        delay: 4.6,
      },
    },
    out: {
      y: "-110%",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div className="TopArtist">
      <motion.div
        className="initial-animate-screen"
        variants={circleWrapper}
        initial="in"
        animate="anim"
        onAnimationComplete={() =>
          document
            .querySelector(".initial-animate-screen")
            .classList.add("display-none")
        }
      >
        <motion.div className="circle" id="one" variants={circle}>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
        </motion.div>
        <motion.div className="circle two" variants={circle}>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
        </motion.div>
        <motion.div className="circle three" variants={circle}>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
        </motion.div>
        <motion.div className="circle four" variants={circle}>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
        </motion.div>
        <motion.div className="circle five" variants={circle}>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
          <h1>НАЙБІЛЬШЕ ПИЗДЮКАВ</h1>
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
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <div className="artist-img">
            <motion.img
              variants={artistInfo}
              initial="in"
              animate="anim"
              exit="out"
              src={sanyaImg}
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
                Найбільше наговорив
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
                @Juliett
              </motion.h1>
            </div>
            <div>
              <motion.p
                variants={artistInfo}
                initial="in"
                animate="anim"
                exit="out"
              >
                Майже 5000 (4973) слів, ну ти і говорилка!
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
          Саня, Саньочек, Олександр, İskəndər, İsgəndər, Aleksandri, Aleksandër,
          Lekë, Skënder, Skender, Aleks, Sandër, Alexander, Ալեքսանդր, Ալեքսան,
          Ալեք, Саня, Саньочек, Олександр, İskəndər, İsgəndər, Aleksandri,
          Aleksandër, Lekë, Skënder, Skender, Aleks, Sandër, Alexander,
          Ալեքսանդր, Ալեքսան, Ալեք, Саня, Саньочек, Олександр, İskəndər,
          İsgəndər, Aleksandri, Aleksandër, Lekë, Skënder, Skender, Aleks,
          Sandër, Alexander, Ալեքսանդր, Ալեքսան, Ալեք, Саня, Саньочек,
          Олександр, İskəndər, İsgəndər, Aleksandri, Aleksandër, Lekë, Skënder,
          Skender, Aleks, Sandër, Alexander, Ալեքսանդր, Ալեքսան, Ալեք, Саня,
          Саньочек, Олександр, İskəndər, İsgəndər, Aleksandri, Aleksandër, Lekë,
          Skënder, Skender, Aleks, Sandër, Alexander, Ալեքսանդր, Ալեքսան, Ալեք,
          Саня, Саньочек, Олександр, İskəndər, İsgəndər, Aleksandri, Aleksandër,
          Lekë, Skënder, Skender, Aleks, Sandër, Alexander, Ալեքսանդր, Ալեքսան,
          Ալեք
        </motion.p>
      </motion.div>
      <motion.div
        className="pagination"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="prev">
          <Link to="/">
            <FaChevronUp style={{ color: "white" }} />
          </Link>
        </div>
        <div className="page-no">
          <p>
            <span>1</span> / 5
          </p>
        </div>
        <div className="next">
          <Link to="/valo-players">
            <FaChevronDown style={{ color: "white" }} />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TopMsgPage;
