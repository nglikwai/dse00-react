// mock before test
jest.spyOn(console, 'log').mockImplementation(() => {})
jest.spyOn(console, 'error').mockImplementation(() => {})

// mock next config (development config)
jest.mock('next/config', () => () => {
  return {
    publicRuntimeConfig: {
      appEnv: 'development',
      nodeEnv: 'development',
    },
  }
})
