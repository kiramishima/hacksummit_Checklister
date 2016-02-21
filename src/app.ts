/// <reference path="../typings/tsd.d.ts" />
angular.module("Checklister", ["ui.router", "ngMaterial", "angular-jwt", "ngMessages"])
.config(function ($mdIconProvider: ng.material.IIconProvider, jwtInterceptorProvider ,$httpProvider: ng.IHttpProvider, $stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
  jwtInterceptorProvider.tokenGetter = function() {
    return localStorage.getItem("JWT");
  }
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