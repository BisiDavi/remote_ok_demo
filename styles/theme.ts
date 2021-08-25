import colors from "@utils/colors";

const theme = {
  card: {
    light: {
      backgroundColor: colors.white,
      color: colors.black,
    },
    dark: {
      color: colors.white,
      backgroundColor: colors.brownish,
    },
  },
  tags: {
    light: {
      color: colors.black,
      border: `2px solid ${colors.black}`,
    },
    dark: {
      color: colors.white,
      border: `2px solid ${colors.white}`,
    },
  },
  wave: {
    light: colors.light,
    dark: colors.grayish,
  },
  hire: {
    light: {
      backgroundColor: colors.white,
      color: colors.black,
    },
    dark: {
      color: colors.white,
      backgroundColor: colors.brownish,
    },
  },
  menu: {
    light: {
      color: colors.black,
    },
    dark: {
      color: colors.white,
    },
  },
};

export default theme;
