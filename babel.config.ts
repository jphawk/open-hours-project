module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: 'current' },
        useBuiltIns: 'usage',
        corejs: 3,
        loose: true,
      },
    ],
    ['@babel/typescript', { allowDeclareFields: true }],
    ['@babel/react'],
  ],
};
