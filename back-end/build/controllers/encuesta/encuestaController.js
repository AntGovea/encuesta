"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerEncuesta = void 0;
var peticionesRedux_1 = require("@helpers/peticionesRedux");
var exe = new peticionesRedux_1.Excecute();
var controllerEncuesta = /** @class */ (function () {
    function controllerEncuesta() {
        var _this = this;
        this.test = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var opc;
            return __generator(this, function (_a) {
                try {
                    opc = req.body.opc;
                    if (opc != null) {
                        res
                            .status(200)
                            .send({ msg: "Consulta exitosa", code: 200, });
                    }
                    else {
                        res
                            .status(200)
                            .send({
                            msg: "error de consulta",
                            code: 500,
                        });
                    }
                }
                catch (e) {
                    console.log(e);
                    res
                        .status(200)
                        .send({ msg: "error en agregarPregunta", code: 500, descripcion: e });
                }
                return [2 /*return*/];
            });
        }); };
        this.getPreguntas = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var results, sql, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        results = void 0;
                        sql = "SELECT * FROM pregunta";
                        return [4 /*yield*/, exe.query(sql)];
                    case 1:
                        results = _a.sent();
                        if (results.validacion) {
                            res
                                .status(200).send({
                                msg: "Consulta exitosa",
                                code: 200,
                                data: results.data
                            });
                        }
                        else {
                            res
                                .status(200)
                                .send({
                                msg: "error de consulta",
                                code: 500,
                                descripcion: results.descripcion
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        res
                            .status(200)
                            .send({ msg: "error en getPreguntas", code: 500, descripcion: e_1 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.addQuestions = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var pregunta, results, sql, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        pregunta = req.body.pregunta;
                        results = void 0;
                        sql = "INSERT INTO pregunta (pregunta) VALUES(" + pregunta + ");";
                        return [4 /*yield*/, exe.query(sql)];
                    case 1:
                        results = _a.sent();
                        if (results.validacion) {
                            res
                                .status(200).send({
                                msg: "Registro Guardado",
                                code: 200,
                                data: results.data
                            });
                        }
                        else {
                            res
                                .status(200)
                                .send({
                                msg: "error al guadar pregunta",
                                code: 500,
                                descripcion: results.descripcion
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.log(e_2);
                        res
                            .status(200)
                            .send({ msg: "error en getPreguntas", code: 500, descripcion: e_2 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    controllerEncuesta.prototype.contructor = function () { };
    return controllerEncuesta;
}());
exports.controllerEncuesta = controllerEncuesta;
