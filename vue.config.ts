module.exports = {
  devServer: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:11000',
        changeOrigin: true
      },
    }
  }
}
