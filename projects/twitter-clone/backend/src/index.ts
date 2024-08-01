import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes/routes';
const app = express();
const port: number = 6200;
const basePath: string = '/';

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(basePath, routes);

// Basic route

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
