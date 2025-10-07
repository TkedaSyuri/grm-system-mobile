import 'dotenv/config';

export default {
  expo: {
    name: "my-app",
    slug: "my-app",
    extra: {
      API_BASEURL: process.env.API_BASEURL,
    },
  },
};
