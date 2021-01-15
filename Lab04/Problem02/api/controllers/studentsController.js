const mongoose = require("mongoose");
const Students = mongoose.model("Student"); // Using the Schema we modeled in students-model

module.exports.getAllStudents = function (req, res) {
  Students.find()
    .exec(function (err, students) {
      const response = {
        status: 200,
        message: students
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!students) {
        response.status = 404;
        response.message = { message: "Sorry there are no students in the record" };
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.getOneStudent = function (req, res) {
  const studentID = req.params.studentID;
  Students.findById(studentID).exec(function (err, student) {
    const response = {
      status: 200,
      message: student
    };
    if (err) {
      console.log(err);
      response.status = 500;
      response.messge = err;
    }
    if (!student) {
      response.status = 404;
      response.message = { message: "Sorry there is no student with the ID "+studentID };
    }
    res.status(response.status).json(response.message);
  });
};



