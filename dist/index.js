"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const hostname = '127.0.0.1';
const port = 5000;
const server = http_1.default.createServer((request, response) => {
});
console.log('hello server');
