const Tutor = require('./Tutor');
const Students = require('./Students');
const Teacher = require("./Teacher")

Tutor.hasMany(Students, {
  foreignKey: 'student_id',
  onDelete: 'CASCADE'
});

Students.belongsTo(Tutor, {
  foreignKey: 'student_id'
});

module.exports = { Tutor, Students, Teacher};
