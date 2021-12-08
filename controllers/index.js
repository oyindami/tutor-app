const router = require('express').Router();
//const {homeRoutes} = require('../../models/');
const apiRoutes = require('./api');
const studentRoutes = require('./api/homeroutes');

router.use('/', studentRoutes);
router.use('/api', apiRoutes);

module.exports = router;
