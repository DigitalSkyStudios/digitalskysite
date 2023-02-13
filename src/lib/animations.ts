export const slideRight = {
  name: "Fade",
  variants: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    }
  },
  transition: {
    duration: 0.7
  }
};
