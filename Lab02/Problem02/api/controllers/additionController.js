module.exports.getSummation = function (req, res) {
  var num1 = req.params.firstNumber;
  var num2 = -1;
  if (req.query && req.query.secondNumber) {
    num2 = req.query.secondNumber;
  }
  var sum = +num1 + +num2;
  console.log("JSON request received");
  console.log("The sum of the input is :" + sum );
  res.status(200).json({"Sum": sum });
};
