const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("DB sync successful");

  await seedGallery();
  console.log("Gallery sync successful");


  await seedPaintings();
  console.log("Painting sync successful");


  process.exit(0);
};

seedAll();
