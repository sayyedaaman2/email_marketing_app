"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// Enviroment Variables 
try {
    process.env.NODE_ENV === "production" ? dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env.production') }) : dotenv_1.default.config();
    console.log('Loaded environment variables from .env.production:', process.env.NODE_ENV);
    console.log(process.env.MONGODB_URI);
}
catch (error) {
    console.error('Error loading environment variables:', error);
}
const root_route_1 = __importDefault(require("./routes/root.route"));
const db_config_1 = __importDefault(require("./database/db.config"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//Root Route
app.use("/", root_route_1.default);
db_config_1.default.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server is running on port :  ${process.env.PORT}`);
    });
    console.log("MongoDB connected successfully");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
    throw new Error(error);
});
