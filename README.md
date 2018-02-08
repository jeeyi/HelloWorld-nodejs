# HelloWorld-nodejs

This Node.js application demonstrates how localized string "Hello World!" appears on the web page.
It uses jquery-i18n-properties to load and parse resource bundles (.properties) based language reported by browser.

Based on the language preference of the browser, it displays appropriate localized string. Supported langauges are Spanish (es), French (fr), Japanese (ja) and Korean (ko). For non-supported languages, it defaults to the original English string.

To run,
```
npm install && npm run start
```
