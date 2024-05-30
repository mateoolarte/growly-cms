import favicon from "./extensions/favicon.png";

const config = {
  locales: ["es"],
  tutorials: false,
  notifications: {
    releases: false,
  },
  auth: {
    logo: favicon,
  },
  menu: {
    logo: favicon,
  },
};

const bootstrap = () => {};

export default {
  config,
  bootstrap,
};
