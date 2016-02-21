/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../service/main.service.ts" />
class MainController {
  public $inject = ["Dashboard"];
  private user: any;
  private isOpen = false;
  private selectedMode = "md-fling";
  private selectedDirection = "down";
  constructor(public Dashboard: Services.IDashboardService, public $state: ng.ui.IStateService) {
      console.log("MainController")
      this.user = Dashboard.get();
  }
  findTask () {
    console.log("Find My Task")
    console.log(this.Dashboard.getTask("1x"))
  }
  config () {
      this.$state.go("");
  }
}

angular.module("Checklister").controller("MainController", MainController);

