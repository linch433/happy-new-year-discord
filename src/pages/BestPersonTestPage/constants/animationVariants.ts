import { Variants } from "framer-motion";

const main: Variants = {
  in: { opacity: 1 },
  anim: {
    opacity: 1,
    transition: {
      staggerChildren: 5,
    },
  },
};

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

export { main, slideIn, stagger, staggerTwo };
