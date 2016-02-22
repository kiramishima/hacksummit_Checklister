/// <reference path="../../../typings/tsd.d.ts" />
var Factories;
(function (Factories) {
    "use strict";
    var Interceptor = (function () {
        function Interceptor($q) {
            this.$q = $q;
            this.$inject = ["$q"];
            this.request = function (config) {
                config.headers.Authorization = localStorage.getItem("jwt");
                return config;
            };
        }
        return Interceptor;
    })();
    Factories.Interceptor = Interceptor;
})(Factories || (Factories = {}));
angular.module("Checklister").factory("AuthInterceptor", Factories.Interceptor);
