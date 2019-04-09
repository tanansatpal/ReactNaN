require('ignore-styles');

require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', ["@babel/preset-typescript", {
    isTSX: true,
    allExtensions: true
  }], '@babel/preset-react']
})

require('./server.ts')
