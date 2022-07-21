const { Router } = require("express");
const {
  renderHomePage,
  renderPaintingPage,
  renderGalleryPage,
} = require("../../controllers/view/index.js.js");

const router = Router();

router.get("/painting/:id", renderPaintingPage);
router.get("/gallery/:id", renderGalleryPage);
router.get("/", renderHomePage);

module.exports = router;
