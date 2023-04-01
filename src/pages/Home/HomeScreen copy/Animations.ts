export const slideAnimation = (direction: 1 | -1, multiply: number) => {
  return {
    initial: {
      x: direction > 0 ? 2000 : -2000,
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: multiply * 0.3,
        duration: 4,
      },
    },
    exit: {
      x: direction < 0 ? 2000 : -2000,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
};

export const infiniteAnimation = () => {
  return {
    initial: {
      x: -1800,
      opacity: 1,
    },
    animate: {
      x: 1800,
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      // type: "linear",
      delay: 0.3,
      duration: 20,
      // repeat: Infinity,
      repeatType: "loop",
    },
  };
};

export const appearAnimation = (duration: number, delay: number) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      delay: delay,
      duration: duration,
    },
  };
};
