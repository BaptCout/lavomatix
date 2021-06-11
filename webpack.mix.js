require('dotenv').config();
let mix = require('laravel-mix');

if(!process.env.MIX_EXIST){
  console.log('You have to create ".env" file with the minimum configuration. See ".env_sample"'.red.bold);
  console.log('These configurations will used in the "webpack.mix.js"'.red)
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */

mix.setPublicPath(process.env.MIX_DIST)
    .babelConfig({
      "presets": ["env"],
      "plugins": []
    })
    .js('src/app.js', process.env.MIX_DIST)
    .sass('src/app.scss', process.env.MIX_DIST)
    .copyDirectory('src/assets', `${process.env.MIX_DIST}/assets`)
    .browserSync({
      proxy: process.env.MIX_PROXY,
      files : [
        `${process.env.MIX_DIST}/app.css`,
        `${process.env.MIX_DIST}/app.js`,
        "../*.html"
      ]
    })
    .sourceMaps()
    .disableNotifications()
    .options({
        processCssUrls: false
     });