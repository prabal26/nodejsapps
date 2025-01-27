const express = require("express");
const router = express.Router();
const { getContacts, createContacts, updateContacts, deleteContacts } = require("../controllers/contactController");

router.route("/").get(getContacts)
router.route("/:id").post(createContacts);
router.route("/:id").put(updateContacts)
router.route("/:id").delete(deleteContacts);


module.exports = router;