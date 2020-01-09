# postcss-selector-remover

Have you ever had some NPM lib adding global styles to your whole site? This is the remedy.

Just specify the selectors and they will be removed from your CSS when compiling.

```javascript
module.exports = () => ({
  plugins: {
    'postcss-selector-remover': {
      selectors: [ '.v-application p' ]
    }
  }
});
```
