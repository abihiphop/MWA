const mongoose = require("mongoose");
const Students = mongoose.model("Student"); // Using the Schema we modeled in students-model

module.exports.getAllAddressOfOneStudent = function (req, res) {
  const studentID = req.params.studentID;
  Students.findById(studentID)
    .select("Address")
    .exec(function (err, addresses) {
      const response = {
        status: 200,
        message: addresses.Address,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!addresses) {
        response.status = 404;
        response.message = {
          message: "Sorry there are no addresses for this student",
        };
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.getOneAddressOfOneStudent = function (req, res) {
  const studentID = req.params.studentID;
  const addressID = req.params.addressID;
  Students.findById(studentID)
    .select("Address")
    .exec(function (err, address) {
      const addr = address.Address.id(addressID);
      const response = {
        status: 200,
        message: addr,
      };
      if (err) {
        console.log(err);
        response.status = 500;
        response.messge = err;
      }
      if (!address) {
        response.status = 404;
        response.message = {
          message:
            "Sorry there is no student with address having an ID " + addressID,
        };
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.addOneAddressOfOneStudent = function (req, res) {
  const studentID = req.params.studentID;
  console.log("POST to add address");
  if (req.body && req.body.Street && req.body.City) {
    Students.update(
      { _id: studentID },
      {
        $push: {
          Address: {
            Street: req.body.Street,
            City: req.body.City,
            State: req.body.State,
            Zipcode: parseInt(req.body.Zipcode),
          },
        },
      },
      function (err, addr) {
        const response = {
          status: 201,
          message: addr,
        };
        if (err) {
          console.log(err);
          response.status = 500;
          response.messge = err;
        }
        res.status(response.status).json(response.message);
      }
    );
  }
};

module.exports.updateOneAddressOfOneStudent = function (req, res) {
  const studentID = req.params.studentID;
  const addressID = req.params.addressID;
  
};

module.exports.deleteOneAddressOfOneStudent = function (req, res) {};
