/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../service/main.service.ts" />
var MainController = (function () {
    function MainController(Dashboard, $state) {
        this.Dashboard = Dashboard;
        this.$state = $state;
        this.$inject = ["Dashboard"];
        this.isOpen = false;
        this.selectedMode = "md-fling";
        this.selectedDirection = "down";
        console.log("MainController");
        this.user = Dashboard.get();
    }
    MainController.prototype.findTask = function () {
        console.log("Find My Task");
        console.log(this.Dashboard.getTask("1x"));
    };
    MainController.prototype.config = function () {
        this.$state.go("");
    };
    return MainController;
})();
angular.module("Checklister").controller("MainController", MainController);
