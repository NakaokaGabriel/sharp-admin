const authentication = async (ctx, next) => {
  await next();
};

export default [
  {
    name: 'strapi::errors',
    config: {
      authentication
    }
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'sharp-admin-bucket.s3.us-east-1.amazonaws.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'sharp-admin-bucket.s3.us-east-1.amazonaws.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: false,
      headers: '*',
      origin: ['sharp-dashboard.vercel.app', 'http://sharp-dashboard.vercel.app', 'https://sharp-dashboard.vercel.app/', 'http://localhost:1337', 'http://localhost:3000'],
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
