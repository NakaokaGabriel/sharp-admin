export default () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      endpoint: '/graphql',
      shadowCRUD: true,
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: false,
      },
    }
  }
})
