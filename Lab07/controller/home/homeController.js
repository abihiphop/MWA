angular.module("MyApp").controller("HomeController", myHomeController); 

function myHomeController(){
    var This = this;
    This.HomeContent = "This is a about content sent from controller";
}
