const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('GET /');
  res.send('GET /');
});
router.post('/', (req, res) => {
  console.log('POST /');
  res.send('POST /');
});

router.get('/login', (req, res) => {
  console.log('GET /login');
  res.send('GET /login');
});
router.post('/login', (req, res) => {
  console.log('POST /login');
  res.send('POST /login');
});

router.get('/admin', (req, res) => {
  console.log('POST /admin');
  res.send('POST /admin');
});

router.post('/admin/upload', (req, res) => {
  console.log('POST /admin/upload');
  res.send('POST /admin/upload');
});

router.post('/admin/skills', (req, res) => {
  console.log('POST /admin/skills');
  res.send('POST /admin/skills');
});

module.exports = router;
