const router = require('express').Router();
const locationRoutes = require('./locationRoutes');
const travellerRoutes = require('./travellerRoutes');
const tripRoutes = require('./tripRoutes');

router.use('/location', locationRoutes);
router.use('/traveller', travellerRoutes);
router.use('/trips', tripRoutes);

module.exports = router;
