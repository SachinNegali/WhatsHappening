const express = require("express");
const { getUsers } = require("./lib/user");

const router = express.Router();

router.get('/', getUsers);
// router.get('/:roll', student_Act.getspecStudent);
// router.post('/', student_Act.createstudent);
// router.patch('/:roll', student_Act.updatestudent);
// router.delete('/:roll', student_Act.deletestudent);
module.exports = router;