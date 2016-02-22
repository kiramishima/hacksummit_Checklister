/// <reference path="../../../typings/tsd.d.ts" />
module Services {
    "use strict";
    export interface ILoginService {
        submit(params:any) : ng.IHttpPromise<{}>;
    }
    export class Login implements ILoginService {
        public $inject = ["$http", "API"];
        constructor(
            public $http: ng.IHttpService,
            public API: any
        ){}
        submit (params:any): ng.IHttpPromise<{}> {
            return this.$http.post(this.API + "login", params);
        }
    }
}

angular.module("Checklister").service("LoginService", Services.Login);