const tailwindcss = require('tailwindcss');
module.exports = {
   plugins: [
      tailwindcss('./postcss.config.js'),
      require('autoprefixer')
   ]
}