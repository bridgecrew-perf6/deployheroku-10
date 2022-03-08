"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Specification = /** @class */ (function () {
    function Specification() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    return Specification;
}());
exports.Specification = Specification;
