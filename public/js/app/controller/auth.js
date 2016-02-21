/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../service/login.service.ts" />
var AuthController = (function () {
    function AuthController(LoginService) {
        this.LoginService = LoginService;
        this.$inject = ["LoginService"];
        console.log("AuthController");
        this.account = { username: "", password: "" };
    }
    AuthController.prototype.login = function (formParams) {
        console.log("Login:submit");
        this.LoginService.submit(formParams);
    };
    return AuthController;
})();
angular.module("Checklister").controller("AuthController", AuthController);
