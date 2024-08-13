"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// Create a new express application instance
const app = (0, express_1.default)();
// Use body-parser middleware to parse JSON bodies
app.use(body_parser_1.default.json());
// Define a route that accepts a POST request to the root path
app.post("/", (req, res) => {
    const requestBody = req.body;
    // Log the request body
    console.log("Request body:", requestBody);
    // Send a response back to the client
    res.status(200).send("msg received");
});
// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
