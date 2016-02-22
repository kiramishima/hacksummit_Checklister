/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../service/login.service.ts" />
var AuthController = (function () {
    function AuthController(LoginService, $state) {
        this.LoginService = LoginService;
        this.$state = $state;
        this.$inject = ["LoginService", "$state"];
        console.log("AuthController");
        this.account = { username: "", password: "" };
    }
    AuthController.prototype.login = function (formParams) {
        var _this = this;
        console.log("Login:submit", formParams);
        this.LoginService.submit(formParams).then(function (response) {
            if (response.data.success) {
                localStorage.setItem("jwt", response.data.token);
                _this.$state.go("home");
            }
        });
    };
    return AuthController;
})();
angular.module("Checklister").controller("AuthController", AuthController);
