const excelController = require('../controller/excelController');
// Import the express module
const express=require('express');
const invalidURL = require('../middleware/auth');
const loginController = require('../controller/loginController')
// Create an instance of the express application
const router = express.Router();
router.get("/list", excelController.listAll);
router.post("/add", excelController.add);
router.delete("/delete/:id",excelController.deleteOne);
router.put("/update/:id",excelController.updateOne);
router.get("/checkLogin/:username/:password",loginController.checkLogin);
router.post("/createLogin", loginController.createLogin);
router.delete("/deleteLogin");
router.put("/updateLogin/:username");
router.use(invalidURL);
module.exports = router;