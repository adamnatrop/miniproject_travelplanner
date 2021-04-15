const Traveller = require('./traveller');
const Location = require('./location');
const Trips = require('./trips');

// can have one or none
// Book.hasOne(Author, {
//   foreignKey: 'author_id',
//   onDelete: 'CASCADE',
// });


Traveller.belongsToMany(Location, {
  through: {
    model: Trips,
    unique: false,
  },
  onDelete: 'CASCADE',
  as: "locationTrips"
});


Location.belongsToMany(Traveller, {
  through: {
    model: Trips,
    unique: false,
  },
  as: "travellerTrips",
  onDelete: 'CASCADE'
});



// book has to have authro
// Book.belongsTo(Author, {
//   foreignKey: 'author_id',
// });

module.exports = { Traveller, Location, Trips };
