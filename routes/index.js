const fs = require("fs");
const path = require("path");

const initRoute = (app) => {

  app.use('/api',require(`../microServices/routes.js`));
//   app.use('/api/country',require(`@/app/lib/countryCode`).sendCountry);
  
//   fs.readdirSync(versionRoutePath).map((x) => {
//     if (apiVersions[x.replace(/\./g, "_").toUpperCase()]) app.use(`/api/${x}`, versionMiddleware.setRequestVersion(x), require(`@/routes/${x}`));
//   });

// next()
};

module.exports = initRoute;
