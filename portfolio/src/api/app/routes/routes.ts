import express from 'express';
const router = express.Router();

const test = require('../services/test');
const about = require('../services/about');

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

export default router;
