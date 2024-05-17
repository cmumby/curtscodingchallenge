import express from 'express';
const router = express.Router();

import test from '../services/test';
import about from '../services/about';
import experience from '../services/experience';
import article from '../services/article';

// Define routes
router.get('/', (req, res) => {
  res.send('Hello from Express!');
});

router.route('/test').get((req, res) => {
  const { query } = req;
  test(res, null, null);
});

router.route('/about').get((req, res) => {
  const { query } = req;
  about(res, null, null);
});

router.route('/experience').get((req, res) => {
  const { query } = req;
  experience(res, null, null);
});

router.route('/article').get((req, res) => {
  const { query } = req;
  article(res, null, null);
});

export default router;
