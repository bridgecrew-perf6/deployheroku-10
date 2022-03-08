"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors = require("cors");
var routes_1 = require("./routes");
var app = express_1.default();
var port = process.env.PORT || 3333;
app.use(cors({ origin: true, credentials: true }));
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(port, function () {
    console.log("Server is up! :D");
});
