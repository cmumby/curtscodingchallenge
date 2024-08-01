import express, { Request, Response } from 'express';
import timeline from '../services/timeline/timeline';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// Route to handle POST requests
router.get('/timeline', (req: Request, res: Response) => {
  const data = req.body;
  timeline(res);
});

export default router;
