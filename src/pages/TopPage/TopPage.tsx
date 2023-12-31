import { motion } from "framer-motion";
import {
  popUp,
  slideIn,
  songCard,
  stagger,
  staggerTwo,
} from "./constants/animationVariants.ts";
import AnswerCard from "@/pages/TopPage/ui/AnswerCard.tsx";

const TopPage = () => (
  <motion.div className="TopFiveSongs" exit={{ transition: { delay: 5 } }}>
    <motion.div
      className="initial-animate"
      variants={stagger}
      initial="in"
      animate="anim"
      exit="out"
      onAnimationComplete={() => {
        const initialAnimateElement =
          document.querySelector(".initial-animate");
        const listElement = document.querySelector(".top-song-list");
        const textBgElement = document.querySelector(".text-bg");

        if (
          initialAnimateElement !== null &&
          listElement !== null &&
          textBgElement !== null
        ) {
          initialAnimateElement.classList.add("display-none");
          listElement.classList.remove("display-none");
          textBgElement.classList.remove("display-none");
        }
      }}
    >
      <motion.div variants={staggerTwo} className="DIV ONE">
        <motion.div variants={slideIn}>Але, це ще не кінець</motion.div>
        <motion.div variants={slideIn}>котики задроти</motion.div>
      </motion.div>
      <motion.div variants={staggerTwo} className="DIV`">
        <motion.div variants={slideIn}>Треба відповісти на</motion.div>
        <motion.div variants={slideIn}>декілька запитань!</motion.div>
      </motion.div>
    </motion.div>
    <motion.div
      className="top-song-list"
      variants={songCard}
      initial="in"
      animate="anim"
    >
      <div className="p-2">
        <motion.div
          className="border-2 rounded-xl border-white p-2 flex items-center justify-center flex-col overflow-y-visible"
          variants={popUp}
          initial="in"
          animate="anim"
          exit="out"
        >
          <AnswerCard />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

export default TopPage;
