import express from "express";
import cors from "cors";
const app = express();

import { PORT } from "./utils/CONSTANTS";
import { clientErrorHandler, logErrors,errorHandler } from "./middleware/error.middleware";

import { productsRoutes } from "./routes";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

productsRoutes.getRoutes(app, express.Router());

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
