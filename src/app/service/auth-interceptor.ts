/// <reference path="../../../typings/tsd.d.ts" />

module Factories {
    "use strict";
    export class Interceptor {
        public $inject = ["$q"];
        constructor(public $q: ng.IQService) {}
        public request = (config: any) => {
            config.headers.Authorization = localStorage.getItem("jwt");
            return config;
        }
    }
}

angular.module("Checklister").factory("AuthInterceptor", Factories.Interceptor);
