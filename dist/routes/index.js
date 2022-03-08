"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var github_routes_1 = require("./github.routes ");
var router = express_1.Router();
exports.router = router;
router.use("/repositories", github_routes_1.gitRoutes);
