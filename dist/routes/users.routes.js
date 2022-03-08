"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var createUser_1 = require("../modules/letalk/useCases/createUser");
var listUsers_1 = require("../modules/letalk/useCases/listUsers");
var userRoutes = express_1.Router();
exports.userRoutes = userRoutes;
userRoutes.post("/", function (request, response) {
    return createUser_1.createUserController.handle(request, response);
});
userRoutes.get("/", function (request, response) {
    return listUsers_1.listUserController.handle(request, response);
});
