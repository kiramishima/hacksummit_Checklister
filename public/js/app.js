/// <reference path="../typings/tsd.d.ts" />
angular.module("Checklister", ["ui.router", "ngMaterial", "angular-jwt", "ngMessages"])
    .config(function ($mdIconProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
    // $httpProvider.interceptors.push("jwtInterceptor");
    $httpProvider.interceptors.push(["$q", function ($q) {
            return {
                "request": function (config) {
                    config.headers = config.headers || {};
                    if (localStorage.getItem("jwt")) {
                        config.headers.Authorization = localStorage.getItem("jwt");
                    }
                    return config;
                }
            };
        }]);
    // $httpProvider.interceptors.push('jwtInterceptor');
    $urlRouterProvider.otherwise("/login");
    $mdIconProvider.defaultIconSet("/fonts/mdi.svg");
    $stateProvider
        .state("login", {
        url: "/login",
        templateUrl: "/template/login.html",
        controller: "AuthController",
        controllerAs: "Auth"
    })
        .state("home", {
        url: "/home",
        templateUrl: "/template/main.html",
        controller: "MainController",
        controllerAs: "Main"
    });
})
    .constant("API", "http://localhost:3000/api/");
