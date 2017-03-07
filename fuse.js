const fsbx = require('fuse-box');

const fuseBox = fsbx.FuseBox.init({
  homeDir: 'src/',
  tsConfig: './tsConfig.json',
  sourceMaps: true,
  outFile: './dist/app.js',
  plugins: [
    fsbx.SVGPlugin(),
    fsbx.JSONPlugin(),
    fsbx.HTMLPlugin({useDefault: false})
  ]
});

fuseBox.devServer('>index.tsx', {
  port: 4446,
  httpServer: true
});