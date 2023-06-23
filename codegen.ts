import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://api.thegraph.com/subgraphs/name/spsina/dibs',
  documents: ['src/apollo/queries.ts'],
  generates: {
    './src/apollo/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
