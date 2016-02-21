/// <reference path="../../../typings/tsd.d.ts" />
var Services;
(function (Services) {
    "use strict";
    var Login = (function () {
        function Login($http) {
            this.$http = $http;
            this.$inject = ["$http"];
        }
        Login.prototype.submit = function (params) {
            this.$http.post("", params).then(function (res) {
                console.log(res);
            });
        };
        return Login;
    })();
    Services.Login = Login;
})(Services || (Services = {}));
angular.module("Checklister").service("LoginService", Services.Login);
