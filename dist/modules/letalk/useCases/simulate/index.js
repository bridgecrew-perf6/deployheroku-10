"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimulateController_1 = require("./SimulateController");
var SimulateUseCase_1 = require("./SimulateUseCase");
var simulateUseCase = new SimulateUseCase_1.SimulateUseCase();
var simulateController = new SimulateController_1.SimulateController(simulateUseCase);
exports.simulateController = simulateController;
