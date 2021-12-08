const router = require('express').Router();
const {Students} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  

  res.render('StudentData');
});

module.exports = router;
