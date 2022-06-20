
const express = require("express");

const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.index)
router.get('/search', mainController.search)
router.get('/service', mainController.service)
router.get('/armarPC', mainController.armarPC)


router.get("/admin", mainController.admin)



module.exports = router