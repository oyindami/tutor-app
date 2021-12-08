const {Students}  = require("../models")

const studentData = [
  {
    "id": 1,
    "name": "James",
    "grade": 74
  
  },
  
  {
    "id": 2,
    "name": "Amber",
    "grade": 65
  
  },

  {
    "id": 3,
    "name": "Lauren",
    "grade": 80
  
  },

  {
    "id": 4,
    "name": "Lisa",
    "grade": 78
  
  },
  {
    "id": 5,
    "name": "Tay",
    "grade": 69
  
  },

  {
    "id": 6,
    "name": "Ally",
    "grade": 90
  
  },

  {
    "id": 7,
    "name": "Edith",
    "grade": 95
  
  },

  {
    "id": 8,
    "name": "Maurice",
    "grade": 72
  
  },

  {
    "id": 9,
    "name": "Bello",
    "grade": 86
  
  },

  {
    "id": 10,
    "name": "Mary",
    "grade": 62
  
  },

  {
    "id": 11,
    "name": "Micah",
    "grade": 76
  
  },

  {
    "id": 12,
    "name": "Sean",
    "grade": 72
  
  },

  {
    "id": 13,
    "name": "Michael",
    "grade": 69
  
  },

  {
    "id": 14,
    "name": "Hollis",
    "grade": 89
  
  },

  {
    "id": 15,
    "name": "Carter",
    "grade": 86
  
  }
]

const seedStudents = () => Students.bulkCreate(studentData);
module.exports = seedStudents;