const router = require("express").Router();
const homeRoutes = require("./test");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
