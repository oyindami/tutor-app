const router = require('express').Router();
const { ConnectionError } = require('sequelize/types');
const {Teacher} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  //try {
    //const TeacherData = await Teacher.findAll({
      //attributes: { exclude: ['password'] },
      //order: [['name', 'grade']],
    //});
    //const users = TeacherData.map((Student) => Student.get({ plain: true }));
  res.render('login');
  //} catch (err) {
    //res.status(500).json(err);
 // }
});
Connection.query

res.render('login');


module.exports = router;
