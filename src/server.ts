import express from "express";
var cors = require("cors");
import { router } from "./routes";

const app = express();

const port = process.env.PORT || 3333;

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log("Server is up! :D");
});
