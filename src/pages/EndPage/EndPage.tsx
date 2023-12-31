import { animated, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import { calc, trans } from "@/app/helpers/calculations.ts";
import {
  main,
  text,
  textCont,
} from "@/pages/EndPage/constants/animationVariants.ts";
import "./styles/EndPage.styles.css";

const EndPage = () => {
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
              <motion.div variants={text}>На</motion.div>
              <motion.div variants={text}> цьому</motion.div>
              <motion.div variants={text}> все!</motion.div>
              <motion.div variants={text}> Дякуємо</motion.div>
              <br />
              <motion.div variants={text}> за</motion.div>
              <motion.div variants={text}> цей</motion.div>
              <motion.div variants={text}> проведений</motion.div>
              <motion.div variants={text}> разом</motion.div>
              <motion.div variants={text}> рік!</motion.div>
            </motion.h1>
          </motion.div>
          <motion.div className="second-text-cont">
            <motion.h2 className="text-xl font-semibold" variants={textCont}>
              <motion.div variants={text}>Бажаємо</motion.div>
              <motion.div variants={text}> такої ж</motion.div>
              <motion.div variants={text}> дружньої</motion.div>
              <motion.div variants={text}> атмосфери</motion.div>
              <motion.div variants={text}> та</motion.div>
              <motion.div variants={text}> приємних спогадів!</motion.div>
              <br />
              <motion.div variants={text}> Всього</motion.div>
              <motion.div variants={text}> Вам</motion.div>
              <motion.div variants={text}> найкращого</motion.div>
              <motion.div variants={text}> пупсики :)</motion.div>
            </motion.h2>
          </motion.div>
        </motion.div>
      </animated.div>
    </motion.div>
  );
};

export default EndPage;
