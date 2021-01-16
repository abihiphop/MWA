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

module.exports.addOneStudent = function (req, res) {
  console.log("POST to add students");
  if (req.body && req.body.name && req.body.grade) {
    Students.create(
      {
        name: req.body.name,
        grade: req.body.grade,
        Building: req.body.Building,

      },
      function (err, students) {
        const response = {
          status: 201,
          message: students,
        };
        if (err) {
          console.log(err);
          response.status = 500;
          response.messge = err;
        }
        if (!students) {
          response.status = 404;
          response.message = {
            message: "Sorry there are no students at the moment",
          };
        }
        res.status(response.status).json(response.message);
      }
    );
  } else {
    console.log("Data is missing from POST body");
    res.status(400).json({ error: "Data is missing from POST body" });
  }
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

module.exports.updateOneStudent = function (req, res) {
  const studentID = req.params.studentID;
  Students.findById(studentID)
    .select("-Address")
    .exec(function (err, student) {
      const response = {
        status: 204,
        message: student,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      } else if (!student) {
        response.status = 404;
        response.message = {
          message: "Sorry there is no student with the ID " + studentID,
        };
      } else if (response.status !== 204) {
        res.status(response.status).json(response.message);
      } else {
        student.name = req.body.name;
        student.grade = parseInt(req.body.grade);
        student.Building = req.body.Building;
        student.save(function (err, updatedstudent) {
          response.message = updatedstudent;
          if (err) {
            response.status = 500;
            response.messge = err;
          }
          res.status(response.status).json(response.message);
        });
      }
    });


}

module.exports.deleteOneStudent = function (req, res) {
  const studentID = req.params.studentID;
  Students.findByIdAndRemove(studentID).exec(function (err, student) {
    const response = {
      status: 204,
      message: student,
    };
    if (err) {
      console.log(err);
      response.status = 500;
      response.messge = err;
    } else if (!student) {
      response.status = 404;
      response.message = {
        message: "Sorry there is no student with the ID " + studentID,
      };
    }
    res.status(response.status).json(response.message);
  });
}

 






