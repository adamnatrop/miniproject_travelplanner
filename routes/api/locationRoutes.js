const router = require('express').Router();
const { Location, Trips, Traveller} = require('../../models');


// Get All Locations
router.get('/', async (req, res) => {
    try {
        const locationData = await Location.findAll({
            include: [{model: Traveller, through: Trips, as: "travellerTrips"}],
        });
        res.status(200).json(locationData);
    } catch (err){
        res.status(500).json(err);
    }
});

// CREATE Location

router.post('/', async (req, res) => {
    try {
        const locationData = await Location.create(req.body);
        
        res.status(200).json(locationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET by Wildcard

router.get('/:id', async (req, res) => {
    try {
        const locationData = await Location.findByPk(req.params.id, {
             include: [{model: Traveller, through: Trips, as: 'travellerTrips'}],
        });
        res.status(200).json(locationData);
    } catch (err){
        res.status(500).json(err);
    }
});

//DELETE Location BY ID

router.delete('/:id', async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where:{
                id: req.params.id
            },
        });

        if (!locationData) {
            res.status(404).json({ message: 'No Location found with that id!' });
            return;
          }

        res.status(200).json(locationData);
    } catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;