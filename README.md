# HelloWorld-nodejs

This Node.js application demonstrates how localized string "Hello World!" appears on the web page.
It uses jquery-i18n-properties to load and parse resource bundles (.properties) based language reported by browser.

Based on the language preference of the browser, it displays appropriate localized string. Supported langauges are Spanish (es), French (fr), Japanese (ja) and Korean (ko). For non-supported languages, it defaults to the original English string.

To run,
```
npm install && npm run start
```

![Alt text](screenshots/English.png?raw=true "Localized in English")

![Alt text](screenshots/Spanish.png?raw=true "Localized in Spanish")

![Alt text](screenshots/Japanese.png?raw=true "Localized in Japanese")

