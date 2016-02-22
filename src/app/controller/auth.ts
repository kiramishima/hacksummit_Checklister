/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../service/login.service.ts" />
class AuthController {
  public $inject = ["LoginService", "$state"];
  public account: any;
  constructor(public LoginService: Services.ILoginService, public $state: ng.ui.IStateService) {
      console.log("AuthController");
      this.account = {username: "", password: ""};
  }
  login (formParams: any) {
    console.log("Login:submit", formParams);
    this.LoginService.submit(formParams).then((response: any) => {
       if (response.data.success) {
           localStorage.setItem("jwt", response.data.token);
           this.$state.go("home");
       }
    });
  }
}

angular.module("Checklister").controller("AuthController", AuthController);