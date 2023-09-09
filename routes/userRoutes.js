const express = require("express");
const {AddContact,DeleteContact,UpdateContact,AllContact, SingleContact}=require('../controller/userControllers');

const router = express.Router();
router.route('/contact').post(AddContact);
router.route('/delete/:id').delete(DeleteContact);
router.route('/update/:id').put(UpdateContact);
router.route('/view').get(AllContact)
router.route('/single/:id').get(SingleContact)


module.exports = router;
