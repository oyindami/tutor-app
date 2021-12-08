const router = require('express').Router();
//const {homeRoutes} = require('../../models/');
const apiRoutes = require('./StudentRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;