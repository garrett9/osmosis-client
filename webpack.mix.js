const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
.js('src/js/osmosis-client.js', 'dist/')
.standaloneSass('src/sass/app.scss', 'dist/osmosis-client.css')
.sourceMaps();

mix.webpackConfig({
	output: {
		library: 'OsmosisClient',
		libraryTarget: 'umd',
		umdNamedDefine: true
	}
});
