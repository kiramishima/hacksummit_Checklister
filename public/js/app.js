/// <reference path="../typings/tsd.d.ts" />
angular.module("Checklister", ["ui.router", "ngMaterial", "angular-jwt", "ngMessages"])
    .config(function ($mdIconProvider, jwtInterceptorProvider, $httpProvider, $stateProvider, $urlRouterProvider) {
    jwtInterceptorProvider.tokenGetter = function () {
        return localStorage.getItem("JWT");
    };
    $httpProvider.interceptors.push("jwtInterceptor");
    // $httpProvider.interceptors.push('jwtInterceptor');
    $urlRouterProvider.otherwise("/login");
    $mdIconProvider.defaultIconSet("/fonts/mdi.svg");
    $stateProvider
        .state("login", {
        url: "/login",
        templateUrl: "/template/main.html",
        controller: "AuthController",
        controllerAs: "Auth"
    })
        .state("home", {
        url: "/home",
        templateUrl: "/template/main.html"
    });
})
    .constant("API", "http://localhost:3000/api/");
