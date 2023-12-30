const main = {
  in: { opacity: 0 },
  anim: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 1.5,
    },
  },
};

const textCont = {
  in: { y: 200 },
  anim: {
    y: 0,
    transition: {
      duration: 3,
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
  out: {
    y: -500,
    transition: {
      duration: 2,
    },
  },
};

const text = {
  in: { y: 100 },
  anim: {
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const btn = {
  in: { opacity: 0 },
  anim: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 4.5,
    },
  },
  out: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 1,
    },
  },
};

export { main, btn, text, textCont };
