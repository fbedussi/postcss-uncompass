var postcss = require('postcss');

module.exports = postcss.plugin('uncompass', function myplugin(options) {
 
    return function (css) {
 
        options = options || {
                propertiesWithValues: ['opacity', 'border-radius', 'justify-content', 'transition']
            };
         
        css.walkRules(function(rule) {;
            rule.walkAtRules(function(atRule) {
                if (atRule.name === 'include') {
                    var regE = new RegExp('(' + options.propertiesWithValues.join('|') + ')\\((.*)\\)');
                    var parsed = atRule.params.match(regE);
                    if (!parsed) {
                        parsed = atRule.params.match(/(display)-(flex)/);
                    }
                    if (parsed) {
                        atRule.remove();
                        rule.append(parsed[1] + ': ' + parsed[2] + ';');
                    }
                }
            });  
        })
 
    }
 
});