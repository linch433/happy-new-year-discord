// import { motion } from "framer-motion";
// import {
//   slideIn,
//   stagger,
//   staggerTwo,
// } from "@/pages/BestPersonTestPage/constants/animationVariants.ts";
// import {Link} from "react-router-dom";
// import {FaChevronUp} from "react-icons/fa";

const BestPersonTestPage = () => (
  <div>123</div>
  // <motion.div className="TopFiveSongs" exit={{ transition: { delay: 5 } }}>
  //   <motion.div
  //     className="initial-animate"
  //     variants={stagger}
  //     initial="in"
  //     animate="anim"
  //     exit="out"
  //     onAnimationComplete={() => {
  //       document
  //         .querySelector(".initial-animate")
  //         .classList.add("display-none");
  //       document
  //         .querySelector(".top-song-list")
  //         .classList.remove("display-none");
  //       document.querySelector(".text-bg").classList.remove("display-none");
  //     }}
  //   >
  //     <motion.div variants={staggerTwo} className="DIV ONE">
  //       <motion.div variants={slideIn}>But a year Like</motion.div>
  //       <motion.div variants={slideIn}>2020 required backup</motion.div>
  //     </motion.div>
  //     <motion.div variants={staggerTwo} className="DIV`">
  //       <motion.div variants={slideIn}>These were the other songs</motion.div>
  //       <motion.div variants={slideIn}>you had on repeat...</motion.div>
  //     </motion.div>
  //   </motion.div>
  //   {/*<motion.div*/}
  //   {/*  className="top-song-list display-none"*/}
  //   {/*  variants={songCard}*/}
  //   {/*  initial="in"*/}
  //   {/*  animate="anim"*/}
  //   {/*>*/}
  //   {/*  <div>{loaded ? getSong(1) : null}</div>*/}
  //   {/*  <div>{loaded ? getSong(2) : null}</div>*/}
  //   {/*  <div>{loaded ? getSong(3) : null}</div>*/}
  //   {/*  <div>{loaded ? getSong(4) : null}</div>*/}
  //   {/*  <div>{loaded ? getSong(5) : null}</div>*/}
  //   {/*</motion.div>*/}
  //   <div>Hi</div>
  //   <motion.div
  //     className="text-bg display-none"
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     transition={{ delay: 3.6, duration: 0.5 }}
  //   >
  //     <p style={loaded ? { fontSize: `${120 / (letters / 25)}vw` } : null}>
  //       {loaded ? songs.map((a) => a.name) : "loading"}
  //     </p>
  //   </motion.div>
  //
  //   <motion.div
  //     className="pagination"
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     transition={{ duration: 1 }}
  //   >
  //     <div className="prev">
  //       <Link to="/top_song">
  //         <FaChevronUp style={{ color: "white" }} />
  //       </Link>
  //     </div>
  //     <div className="page-no">
  //       <p>
  //         <span>3</span> / 4
  //       </p>
  //     </div>
  //     <div className="next">
  //       <Link to="/top_genre">
  //         <FaChevronDown style={{ color: "white" }} />
  //       </Link>
  //     </div>
  //   </motion.div>
  //   {loaded ? <audio id="audio" src={songPreview} autoPlay loop></audio> : null}
  // </motion.div>
);

export default BestPersonTestPage;
