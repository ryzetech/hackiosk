/**
 * IMPORTS
 */
import express, { json } from 'express';
import helmet from 'helmet';
import config from './config.js';

/**
 * CREATE AND CONFIGURE EXPRESS APP
 */
const app = express();
app.use(helmet());
app.use(json());

/**
 * ROUTING
 */
import router from "./src/routes/index.js";
app.use("/", router);

/**
 * START SERVER
 */
app.listen(config.port, (err) => {
  if (err) {
      throw err;
  }
  console.log(`App started on Port ${config.port}. http://localhost:${config.port}/`);
});