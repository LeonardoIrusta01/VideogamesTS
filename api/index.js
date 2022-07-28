import "dotenv/config";
import mongoose from "mongoose";
import Express from "express";
import Cors from "cors";
import morgan from "morgan";
import route from "./src/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      description:
        "A simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./src/Routes/*.js"],
};
const app = Express();

// Controladores y dependencias.
app.use(Cors());
app.use(morgan("dev"));
app.use(Express.json({ limit: "50mb" }));
app.use(Express.urlencoded({ extended: true, limit: "50mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Route
app.use("/", route);

app.get("/hola", (req, res) => {
  res.send("hola bb");
});

// Coneccion.
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@videogames.g4yvf.mongodb.net/?retryWrites=true&w=majority`,
    {
      // useCreateIndex: true,
      // useFindAndModify: false,
      useNewUrlParser: true,
    }
  )
  .then((db) => console.log("conexion exitosa"))
  .catch((err) => console.log("error: ", err));

// Levanto el servidor a usar.
const server = app.listen(`${DB_HOST}`, () =>
  console.log("Escuchando en puerto 3000 ")
);

server.on("error", (e) => {
  console.log("server error");
});
