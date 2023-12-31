import { Variants } from "framer-motion";

const stagger: Variants = {
  in: { opacity: 1 },
  anim: {
    opacity: 1,
    height: "0%",
    transition: {
      staggerChildren: 1.5,
      duration: 0.6,
      delay: 3.5,
    },
  },
  out: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
const staggerTwo: Variants = {
  in: { opacity: 1 },
  anim: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const slideIn: Variants = {
  in: { y: "210%" },
  anim: {
    y: "0%",
    transition: {
      duration: 1,
    },
  },
};
const songCard: Variants = {
  in: { opacity: 1 },
  anim: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const popUp: Variants = {
  in: { y: "200%" },
  anim: {
    y: "0%",
    transition: {
      duration: 1.2,
      delay: 3.6,
    },
  },
  out: {
    y: "-200%",
    transition: {
      duration: 1.2,
    },
  },
};

export { songCard, popUp, slideIn, stagger, staggerTwo };
