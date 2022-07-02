const express = require("express");
const { getComments } = require("../controllers/comment");
const { getLikes } = require("../controllers/like");
const { getPosts } = require("../controllers/post");
const { createUser } = require("../controllers/user");
const { getUsers } = require("./lib/user");


const router = express.Router();

router.get('/users', getUsers);
router.get('/user', createUser);
router.get('/post', getPosts);
router.get('/like', getLikes);
router.get('/comments', getComments);
// router.get('/:roll', student_Act.getspecStudent);
// router.post('/', student_Act.createstudent);
// router.patch('/:roll', student_Act.updatestudent);
// router.delete('/:roll', student_Act.deletestudent);
module.exports = router;