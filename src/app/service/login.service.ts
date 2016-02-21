/// <reference path="../../../typings/tsd.d.ts" />
module Services {
    "use strict";
    export interface ILoginService {
        submit(params:any);
    }
    export class Login implements ILoginService {
        public $inject = ["$http"];
        constructor(
            public $http: ng.IHttpService
        ){}
        submit (params:any) {
            this.$http.post("", params).then((res: any) => {
               console.log(res);
            });
        }
    }
}

angular.module("Checklister").service("LoginService", Services.Login);