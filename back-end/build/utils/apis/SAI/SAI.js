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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarInformacionSAI = exports.validarFolioSAI = exports.validarFolioYCorreoSAI = void 0;
var axios_1 = __importDefault(require("axios"));
var validarFolioYCorreoSAI = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, password, usernameProduccion, passwordProduccion, body, folioContrato, correo, sai, saiProduccion, auth, headers, authProduccion, headersProduccion, resp, _a, code, message, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                username = "globalclick";
                password = "mE7NQc2C9nLCvm-2AAuCr4hNNB-8j4Xe22RLrWyDJV";
                usernameProduccion = "globalclick";
                passwordProduccion = "ffTqH4E0klambVS-7z2qmCze6ppV-AbmFhrpvWhZNs8LC7xk5U";
                body = req.body;
                folioContrato = body.folioContrato, correo = body.correo;
                sai = "https://qasai.globalclickmexico.com/api/contrato/cliente/".concat(folioContrato);
                saiProduccion = "https://globalsai.cloudapps.mx/api/contrato/cliente/".concat(folioContrato);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                auth = "Basic " + Buffer.from(username + ":" + password).toString("base64");
                headers = { Authorization: auth };
                authProduccion = "Basic " + Buffer.from(usernameProduccion + ":" + passwordProduccion).toString("base64");
                headersProduccion = { Authorization: authProduccion };
                return [4 /*yield*/, axios_1.default.get("".concat(sai), { headers: headers })];
            case 2:
                resp = _b.sent();
                _a = resp.data, code = _a.code, message = _a.message;
                //?VALIDAR CORREO
                if (correo === undefined || correo === null) {
                    res.status(200).send({
                        msg: "Falto en campo del correo",
                        code: 500,
                        acceso: false,
                    });
                    return [2 /*return*/];
                }
                if (code === 500) {
                    res.status(200).send({
                        msg: message,
                        code: code,
                        acceso: false,
                    });
                    return [2 /*return*/];
                }
                if (code === 200) {
                    if (resp.data.data.email === correo) {
                        res.status(200).send({
                            msg: "¡Informacion Verificada!!!",
                            correo: correo,
                            folioContrato: folioContrato,
                            acceso: true,
                        });
                    }
                    else {
                        res.status(200).send({
                            msg: "¡Revisa el correo e intenta de nuevo!!!",
                            acceso: false,
                            code: code,
                        });
                    }
                }
                else {
                    //si el folio existe y el correo no existe en la BD el usuario puede continuar con el regsitro
                    res.status(200).send({
                        msg: "Revisa el folio e intenta de nuevo!!!",
                        acceso: false,
                        correo: false,
                        error: message,
                        code: code,
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                console.log("Algo sucedio al validar credenciale en SAI");
                console.log(err_1.message);
                res.status(500).send({
                    msg: "Error con la validacion de credenciales al SAI",
                    error: err_1.message,
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.validarFolioYCorreoSAI = validarFolioYCorreoSAI;
var validarFolioSAI = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, password, usernameProduccion, passwordProduccion, body, folioContrato, sai, saiProduccion, auth, headers, authProduccion, headersProduccion, resp, _a, code, data, message, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                username = "globalclick";
                password = "mE7NQc2C9nLCvm-2AAuCr4hNNB-8j4Xe22RLrWyDJV";
                usernameProduccion = "globalclick";
                passwordProduccion = "ffTqH4E0klambVS-7z2qmCze6ppV-AbmFhrpvWhZNs8LC7xk5U";
                body = req.body;
                folioContrato = body.folioContrato;
                sai = "https://qasai.globalclickmexico.com/api/contrato/cliente/".concat(folioContrato);
                saiProduccion = "https://globalsai.cloudapps.mx/api/contrato/cliente/".concat(folioContrato);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                auth = "Basic " + Buffer.from(username + ":" + password).toString("base64");
                headers = { Authorization: auth };
                authProduccion = "Basic " + Buffer.from(usernameProduccion + ":" + passwordProduccion).toString("base64");
                headersProduccion = { Authorization: authProduccion };
                return [4 /*yield*/, axios_1.default.get("".concat(sai), { headers: headers })];
            case 2:
                resp = _b.sent();
                _a = resp.data, code = _a.code, data = _a.data, message = _a.message;
                // console.log(resp)
                //  console.log('folioContrato')
                //  console.log(folioContrato)
                console.log(data);
                console.log(message);
                //?VALIDAR CORREO
                if (folioContrato === undefined || folioContrato === null) {
                    res.status(200).send({
                        msg: "Falto en campo del folio",
                        code: 500,
                        acceso: false,
                    });
                    return [2 /*return*/];
                }
                if (code === 500) {
                    res.status(200).send({
                        msg: message,
                        code: code,
                        acceso: false,
                    });
                    return [2 /*return*/];
                }
                if (code === 200) {
                    // console.log('emailSai')
                    // console.log(emailSai)
                    // console.log('correo')
                    // console.log(correo)
                    // if (emailSai === correo ){
                    res.status(200).send({
                        msg: "¡Informacion Verificada!!!",
                        folioContrato: folioContrato,
                        acceso: true,
                        data: resp.data.data,
                    });
                    // }
                }
                else {
                    res.status(200).send({
                        msg: message,
                        acceso: false,
                        code: code,
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                console.log("Algo sucedio al validar el folio en SAI");
                console.log(err_2.message);
                res.status(500).send({
                    msg: "Error con la validacion de folio al SAI",
                    error: err_2.message,
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.validarFolioSAI = validarFolioSAI;
var validarInformacionSAI = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, password, sai, timeStamp, body, _a, folioContrato, auth, headers, resp, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                username = "globalclick";
                password = "mE7NQc2C9nLCvm-2AAuCr4hNNB-8j4Xe22RLrWyDJV";
                sai = "https://qasai.globalclickmexico.com/api/contrato/validar-datos-web";
                timeStamp = Math.round(new Date().getTime() / 1000);
                body = req.body;
                _a = body.folioContrato, folioContrato = _a === void 0 ? 1200 : _a;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                auth = "Basic " + Buffer.from(username + ":" + password).toString("base64");
                headers = { Authorization: auth };
                return [4 /*yield*/, axios_1.default.post("".concat(sai), JSON.stringify(folioContrato), { headers: headers })];
            case 2:
                resp = _b.sent();
                // console.log(resp.data)
                res.status(200).send({
                    msg: "Respuesta recibida",
                    data: resp,
                });
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                console.log("Algo sucedio al consultar informacion al SAI");
                console.log(err_3.message);
                res.status(500).send({
                    msg: "Error con la peticion al SAI",
                    status: 500,
                    error: err_3.message,
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.validarInformacionSAI = validarInformacionSAI;
