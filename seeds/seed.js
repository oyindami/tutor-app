const sequelize = require('../config/connection');

const seedTutor = require('./tutorData')
const seedTeacher = require('./TeacherData');
const seedStudents = require('./studentData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedTeacher();
  console.log('\n TEACHER SEEDED!!!!!!')
  await seedStudents();
  console.log('\n STUDENTS SEEDED!!!!!!')
  await seedTutor();
  console.log('\n TUTOR SEEDED!!!!!!')


  process.exit(0);
};

seedDatabase();
