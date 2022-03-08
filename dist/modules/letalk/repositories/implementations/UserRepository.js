"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../../model/User");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.users = this.readFile();
    }
    UserRepository.getInstance = function () {
        if (!UserRepository.INSTANCE) {
            UserRepository.INSTANCE = new UserRepository();
        }
        return UserRepository.INSTANCE;
    };
    UserRepository.prototype.readFile = function () {
        var fs = require("fs");
        return JSON.parse(fs.readFileSync("student.json", "utf8"));
    };
    UserRepository.prototype.writeFile = function () {
        var json = JSON.stringify(this.users);
        var fs = require("fs");
        fs.writeFile("student.json", json, "utf8", function () { });
    };
    UserRepository.prototype.create = function (_a) {
        var cpf = _a.cpf, uf = _a.uf, nascimento = _a.nascimento, vlEmprestimo = _a.vlEmprestimo, vlAPagarMes = _a.vlAPagarMes, projecao = _a.projecao;
        var user = new User_1.User();
        Object.assign(user, {
            cpf: cpf,
            uf: uf,
            nascimento: nascimento,
            vlEmprestimo: vlEmprestimo,
            vlAPagarMes: vlAPagarMes,
            projecao: projecao,
            created_at: new Date(),
        });
        this.users.push(user);
        this.writeFile();
    };
    UserRepository.prototype.findByCPF = function (cpf) {
        var user = this.users.find(function (user) { return user.cpf === cpf; });
        return user;
    };
    UserRepository.prototype.list = function () {
        return this.users;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
