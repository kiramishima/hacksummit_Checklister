/// <reference path="../../../typings/tsd.d.ts" />
var Services;
(function (Services) {
    "use strict";
    var Login = (function () {
        function Login($http, API) {
            this.$http = $http;
            this.API = API;
            this.$inject = ["$http", "API"];
        }
        Login.prototype.submit = function (params) {
            return this.$http.post(this.API + "login", params);
        };
        return Login;
    })();
    Services.Login = Login;
})(Services || (Services = {}));
angular.module("Checklister").service("LoginService", Services.Login);
