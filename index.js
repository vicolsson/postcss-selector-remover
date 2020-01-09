var postcss = require('postcss');

module.exports = postcss.plugin('postcss-selector-remover', function selectorRemover(options) {
  var selectors = (options || {}).selectors || [];

  return function (root) {
    root.walkRules(function (rule) {
      if (selectors.indexOf(rule.selector) > -1) {
        rule.remove();
      }
    });
  };
});
