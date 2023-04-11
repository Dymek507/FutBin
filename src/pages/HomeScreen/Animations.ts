export const slideAnimationX = (
  direction: "left" | "right",
  multiply: number,
  initialOpacity?: number,
  distance?: string
) => {
  return {
    initial: {
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 0.3,
      transition: {
        delay: multiply * 0.3,
        duration: 4,
      },
    },
    exit: {
      x: direction === "right" ? "100%" : "-100%",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
};
export const slideAnimationY = (
  direction: "top" | "bottom",
  multiply: number,
  initialOpacity: number,
  distance: string
) => {
  return {
    initial: {
      y: direction === "bottom" ? distance : -distance,
      opacity: initialOpacity,
    },
    animate: {
      y: 0,
      opacity: 0.3,
      transition: {
        delay: multiply * 0.3,
        duration: 4,
      },
    },
    exit: {
      y: direction === "bottom" ? distance : -distance,
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
