angular.module("MyApp").controller("AboutController", myAboutController); 

function myAboutController(){
    var This = this;
    This.AboutContent = "This is a about content sent from about controller";
}
