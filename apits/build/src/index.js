"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// Importing routes
const videogames_1 = __importDefault(require("./Routes/videogames"));
const genres_1 = __importDefault(require("./Routes/genres"));
const platforms_1 = __importDefault(require("./Routes/platforms"));
// Initializations
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
require("./database");
// Settings
app.set("port", process.env.PORT || 3000);
// Middlewares
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
// Routes
app.use("/Videogames", videogames_1.default);
app.use("/Genres", genres_1.default);
app.use("/Platforms", platforms_1.default);
// Start
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});
