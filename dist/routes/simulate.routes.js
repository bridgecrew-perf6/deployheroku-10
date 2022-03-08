"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var simulate_1 = require("../modules/letalk/useCases/simulate");
var simulateRoutes = express_1.Router();
exports.simulateRoutes = simulateRoutes;
simulateRoutes.get("/", function (request, response) {
    return simulate_1.simulateController.handle(request, response);
});
