const mongoose = require("mongoose");
const Cities = mongoose.model("Cities");

module.exports.getAllCities = function (req, res) {
  var offset = 0;
  var count = 10;
  Cities.find()
    // .skip(offset)
    // .limit(count)
    .exec(function (err, cities) {
      const response = {
        status: 200,
        message: "",
      };
      if (err) {
        response.status = 500;
        response.message = err;
      } else if (!cities) {
        response.status = 404;
        response.message = { message: "Sorry There are no Cities" };
      } else {
        response.message = cities;
      }
      res.status(response.status).json(response.message);
    });
};

module.exports.getOneCity = function (req, res) {
  var cityID = req.params.cityID;
  Cities.findById(cityID).exec(function (err, city) {
    const response = {
      status: 200,
      message: "",
    };
    if (err) {
      response.status = 500;
      response.message = err;
    } else if (!city) {
      response.status = 404;
      response.message = {
        message: "Sorry There is no City for the id " + cityID,
      };
    } else {
      response.message = city;
    }
    res.status(response.status).json(response.message);
  });
};

module.exports.addCity = function (req, res) {
  var coordinates = req.body.loc.split(/,/);
  console.log("Reached");
  Cities.create(
    {
      city: req.body.city,
      zip: req.body.zip,
      loc: {
        x: parseFloat(coordinates[0]),
        y: parseFloat(coordinates[1]),
      },
      pop: parseInt(req.body.pop),
      state: req.body.state,
    },
    function (err, createdCity) {
      console.log(createdCity);
      const response = {
        status: 200,
        message: "",
      };
      if (err) {
        response.status = 500;
        response.message = err;
      } else if (!createdCity) {
        response.status = 404;
        response.message = {
          message: "Sorry city could not be inserted ",
        };
      } else {
        response.message = { message: "success" };
        res.status(response.status).json(response.message);
      }
    }
  );
};

module.exports.deleteCity = function (req, res) {
  var cityID = req.params.cityID;
  Cities.findByIdAndRemove(cityID).exec(function (err, deletedCity) {
    const response = {
      status: 202,
      message: "",
    };
    if (err) {
      response.status = 500;
      response.message = err;
    } else if (!deletedCity) {
      response.status = 404;
      response.message = {
        message: "Sorry city could not be deleted ",
      };
    } else {
      response.message = { message: "City successfully deleted" };
    }

    res.status(response.status).json(response.message);
  });
};

module.exports.editCity = function (req, res) {
  var cityID = req.params.cityID;
  Cities.findById(cityID).exec(function (err, city) {
    var response = {
      status: 202,
      message: "",
    };
    if (err) {
      response.status = 500;
      response.message = err;
      res.status(response.status).json(response.message);
    } else if (!city) {
      response.status = 404;
      response.message = {
        message: "Sorry there is no such city ",
      };
      res.status(response.status).json(response.message);
    } else {
      var coordinates = req.body.loc.split(/,/);
      city.city = req.body.city;
      city.zip = req.body.zip;
      (city.loc = {
        x: parseFloat(coordinates[0]),
        y: parseFloat(coordinates[1]),
      }),
        (city.po = parseInt(req.body.pop)),
        (city.state = req.body.state),
        city.save(function (err, savedCity) {
          if (err) {
            response.status = 500;
            response.message = err;
            res.status(response.status).json(response.message);
          } else if (!savedCity) {
            response.status = 404;
            response.message = {
              message: "Sorry city could not be edited ",
            };
            res.status(response.status).json(response.message);
          } else {
            response.message = { message: "success" };
            res.status(response.status).json(response.message);
          }
        });
    }

    //res.status(response.status).json(response.message);
  });
};
