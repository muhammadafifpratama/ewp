const router = require("express").Router()
const {tes} = require("../controller")

router.get("/tes", tes.tes)
router.get("/boom", tes.create)

module.exports = router