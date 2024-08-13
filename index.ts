import express, { Request, Response } from "express";
import bodyParser from "body-parser";

// Create a new express application instance
const app: express.Application = express();

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a route that accepts a POST request to the root path
app.post("/", (req: Request, res: Response) => {
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
