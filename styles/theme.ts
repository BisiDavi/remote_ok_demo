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
};

export default theme;
