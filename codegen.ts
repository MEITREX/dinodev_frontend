import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:12001/graphql',
  documents: ['src/**/*.vue', 'src/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: true,
      },
      config: {
        useTypeImports: true,
      }
    }
  }
}

export default config
