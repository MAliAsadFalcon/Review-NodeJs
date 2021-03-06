const express = require("express");
const router = express.Router();

const {
  getAll,
  create,
  getById,
  getByRestaurantId,
  replied,
  _delete,
} = require("../controllers/review");

// controllers

router.get("/", getAll);
router.get("/getbyid/:id", getById);
router.get("/getByRestaurantId/:id", getByRestaurantId);
router.post("/create", create);
router.put("/replied/:id", replied);
router.delete("/delete/:id", _delete);

module.exports = router;
