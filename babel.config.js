module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ],
  plugins: [
    'transform-vue-jsx',
    '@babel/plugin-proposal-optional-chaining',
    [
      'component',
      {
        libraryName: 'element-ui',
        // styleLibraryName: 'theme-chunk'
        style: false
      }
    ]
  ]
}
