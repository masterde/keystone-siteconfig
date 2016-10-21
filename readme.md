# Keystone SiteConfig
Modulo de configuração de sites para Keystone

In models/Config.js
```javascript
  require('keystone-siteconfig').model();
```

In routes/index.js
```javascript
  app.use(require('keystone-siteconfig').middleware)
```
