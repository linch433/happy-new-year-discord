import { Variants } from "framer-motion";

const circleWrapper: Variants = {
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

const circle: Variants = {
  in: { rotate: 0, y: "-50%", x: "-50%" },
  anim: {
    rotate: [null, -15, 0],
    transition: {
      duration: 2,
      times: [0, 0.3, 1],
    },
  },
};

const artistInfo: Variants = {
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

export { circleWrapper, circle, artistInfo };
