const { Router } = require("express");
const {
  renderHomePage,
  renderPaintingPage,
  renderGalleryPage,
} = require("../../src/controllers/view/index.js");

const router = Router();

router.get("/painting/:id", renderPaintingPage);
router.get("/gallery/:id", renderGalleryPage);
router.get("/", renderHomePage);

module.exports = router;
