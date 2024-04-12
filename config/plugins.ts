export default ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      endpoint: '/graphql',
      shadowCRUD: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: false,
      },
    }
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_ACCESS_SECRET,
        },
        region: process.env.AWS_REGION,
        baseUrl: `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_BUCKET}`, // This line sets the custom url format
        params: {
          ACL: process.env.AWS_ACL || 'public-read',
          signedUrlExpires: process.env.AWS_SIGNED_URL_EXPIRES || 15 * 60,
          Bucket: process.env.AWS_BUCKET,
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
})
