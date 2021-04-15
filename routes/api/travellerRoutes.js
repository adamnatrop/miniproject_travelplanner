const router = require('express').Router();
const { Location, Trips, Traveller} = require('../../models');


// Get All Travellers
router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findAll({
            include: [{model: Location, through: Trips, as: "locationTrips"}],
        });
        res.status(200).json(travellerData);
    } catch (err){
        res.status(500).json(err);
    }
});

// CREATE Traveller

router.post('/', async (req, res) => {
    try {
        const travellerData = await Traveller.create(req.body);
        
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET by Wildcard

router.get('/:id', async (req, res) => {
    try {
        const travellerData = await Traveller.findByPk(req.params.id, {
            include: [{model: Location, through: Trips, as: "locationTrips"}],
        });
        res.status(200).json(travellerData);
    } catch (err){
        res.status(500).json(err);
    }
});

//DELETE TRAVELLER BY ID

router.delete('/:id', async (req, res) => {
    try {
        const travellerData = await Traveller.destroy({
            where:{
                id: req.params.id
            },
        });

        if (!travellerData) {
            res.status(404).json({ message: 'No Traveller found with that id!' });
            return;
          }

        res.status(200).json(travellerData);
    } catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;