const { Tutor } = require("../models")

const tutorData = [
{
    "id": 1,
    "name": "Amy",
    "student_id": null
},
{
    "id": 2,
    "name": "Bernard",
    "student_id": null
},
{
    "id": 3,
    "name": "Jillian",
    "student_id": null
},
{
    "id": 4,
    "name": "John",
    "student_id": null
},
{
    "id": 5,
    "name": "Denise",
    "student_id": null
}
]

const seedTutor = () => Tutor.bulkCreate(tutorData)

module.exports = seedTutor;