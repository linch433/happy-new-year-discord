import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import "./styles/MainPage.css";
import { Link } from "react-router-dom";
import { calc, trans } from "@/app/helpers/calculations.ts";
import {
  btn,
  main,
  text,
  textCont,
} from "@/pages/MainPage/constants/animationVariants.ts";

const MainPage = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 50 },
  }));

  return (
    <motion.div
      className="bg-[#3b00e2] w-screen h-screen flex justify-center items-center text-white"
      onMouseMove={({ clientX: x, clientY: y }) => {
        set({ xys: calc(x, y) });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
    >
      <div className="absolute top-2 right-2 text-2xl z-10">
        <motion.p
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 1 }}
        >
          Привіт, козаче
        </motion.p>
      </div>

      <animated.div
        className="spring-cont"
        style={{ transform: props.xys.to(trans) }}
      >
        <motion.div
          className="main"
          variants={main}
          initial="in"
          animate="anim"
          exit="out"
        >
          <motion.div className="first-text-cont">
            <motion.h1 className="text-3xl font-bold" variants={textCont}>
              <motion.div variants={text}>Багато</motion.div>
              <motion.div variants={text}> чого</motion.div>
              <motion.div variants={text}> сталось</motion.div>
              <motion.div variants={text}> на</motion.div>
              <br />
              <motion.div variants={text}> цьому</motion.div>
              <motion.div variants={text}> сервері</motion.div>
              <motion.div variants={text}> у</motion.div>
              <motion.div variants={text}> 2023</motion.div>
              <motion.div variants={text}> році</motion.div>
            </motion.h1>
          </motion.div>
          <motion.div className="second-text-cont">
            <motion.h2 className="text-xl font-semibold" variants={textCont}>
              <motion.div variants={text}>Але</motion.div>
              <motion.div variants={text}> є тут</motion.div>
              <motion.div variants={text}> пару</motion.div>
              <motion.div variants={text}> прикольчиків</motion.div>
              <motion.div variants={text}> з</motion.div>
              <motion.div variants={text}> цього року,</motion.div>
              <br />
              <motion.div variants={text}> а</motion.div>
              <motion.div variants={text}> то</motion.div>
              <motion.div variants={text}> може</motion.div>
              <motion.div variants={text}> забули,</motion.div>
              <motion.div variants={text}> а?</motion.div>
            </motion.h2>
          </motion.div>
          <motion.div variants={btn}>
            <Link to="/top-msgs">
              <button className="start-btn">Сюда давай тикай</button>
            </Link>
          </motion.div>
        </motion.div>
      </animated.div>
    </motion.div>
  );
};

export default MainPage;
