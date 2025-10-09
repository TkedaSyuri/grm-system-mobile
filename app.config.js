import 'dotenv/config';

export default {
  expo: {
    name: "grm-system-mobile",
    slug: "grm-system-mobile",
    owner: "syuri2000",
    extra: {
      API_BASEURL: process.env.API_BASEURL,
      eas: {
        projectId: "08fc4b7e",
      },
    },
    updates: {
      url: "https://u.expo.dev/08fc4b7e",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};
