const router = require('express').Router();
const { Location, Trips, Traveller} = require('../../models');



// CREATE Trip

router.post('/', async (req, res) => {
    try {
        const tripData = await Trips.create(req.body);
        
        res.status(200).json(tripData);
    } catch (err) {
        res.status(400).json(err);
    }
});


//DELETE TRIP BY ID

router.delete('/:id', async (req, res) => {
    try {
        const tripData = await Trips.destroy({
            where:{
                id: req.params.id
            },
        });

        if (!tripData) {
            res.status(404).json({ message: 'No Trip found with that id!' });
            return;
          }

        res.status(200).json(tripData);
    } catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;