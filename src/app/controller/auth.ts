/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../service/login.service.ts" />
class AuthController {
  public $inject = ["LoginService"];
  public account: any;
  constructor(public LoginService: Services.ILoginService) {
      console.log("AuthController");
      this.account = {username: "", password: ""};
  }
  login (formParams: any) {
    console.log("Login:submit")
    this.LoginService.submit(formParams);
  }
}

angular.module("Checklister").controller("AuthController", AuthController);