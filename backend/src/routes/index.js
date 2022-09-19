const projetsRouter = require("./projets");

const setupRoutes = (app) => {
  app.use("/projets", projetsRouter);
};

module.exports = { setupRoutes };
