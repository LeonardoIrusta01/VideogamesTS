import mongoose, { ConnectOptions } from "mongoose";

import { mongodb } from "./keys";

mongoose
  .connect(mongodb.URI, {
    autoIndex: true,
    useNewUrlParser: true,
  } as ConnectOptions)
  .then((db) => console.log("conexion exitosa"))
  .catch((err) => console.log("error: ", err));
