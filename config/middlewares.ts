const authentication = async (ctx, next) => {
  console.log("🚀 ~ authentication ~ ctx:", ctx);
  await next();
};

export default [
  {
    name: 'strapi::errors',
    config: {
      authentication
    }
  },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
