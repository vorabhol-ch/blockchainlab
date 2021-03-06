"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var BitcoinController = __importStar(require("./controllers/blockchainController"));
var app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get("/blockchain", BitcoinController.getBitCoint);
app.post("/register-and-broadcast-node", BitcoinController.registerAndBroadcastNode);
app.post("/register-node", BitcoinController.registerNode);
app.post("/register-nodes-bulk", BitcoinController.registerNodesBulk);
app.post("/transaction/broadcast", BitcoinController.transactionBroadcast);
app.post("/transaction", BitcoinController.addTransaction);
app.post("/receive-new-block", BitcoinController.recieveNewBlock);
app.post("/regist-all-node", BitcoinController.registAllNode);
exports.default = app;
//# sourceMappingURL=app.js.map