import express from 'express';
const router = express.Router();

const test = require('../services/test');

// Define routes
router.get('/', (req, res) => {
  res.send('Hello from Express!');
});

router.route('/test').get((req, res) => {
  const { query } = req;
  test(res, null, null);
});

export default router;
