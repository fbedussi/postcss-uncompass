#postcss-uncompass
A PostCSS plugin to replace compass CSS3 mixins with standard CSS declarations, then you can pipe the result to autoprefixer, if needed.

Please note that this is work in progress.

The plugin has an array of the Compass CSS3 mixins to replace, if you want to overwrite it pass a configuration object with a property named 'propertiesWithValues' and an array assigned to it, eg:
```javascript
var uncompass = require('postcss-uncompass')({propertiesWithValues: ['opacity', 'border-radius', 'justify-content', 'transition']});
```