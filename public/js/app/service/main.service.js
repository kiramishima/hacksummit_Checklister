/// <reference path="../../../typings/tsd.d.ts" />
var Services;
(function (Services) {
    "use strict";
    var Dashboard = (function () {
        function Dashboard() {
            this.user = {
                id: "1",
                name: "Kiramishima",
                services: ["trello", "github"],
                Tasks: [
                    { type: "Github", task: "UX Design", id: "1x" },
                    { type: "Trello", task: "RAML Design", id: "2y" }
                ]
            };
        }
        Dashboard.prototype.get = function () {
            return this.user;
        };
        Dashboard.prototype.all = function () {
            return this.user.Tasks;
        };
        Dashboard.prototype.getTask = function (taskId) {
            for (var i = 0; i < this.user.Tasks.length; i++) {
                if (this.user.Tasks[i].id === taskId) {
                    return this.user.Tasks[i];
                }
            }
            return null;
        };
        return Dashboard;
    })();
    Services.Dashboard = Dashboard;
})(Services || (Services = {}));
angular.module("Checklister").service("Dashboard", Services.Dashboard);
