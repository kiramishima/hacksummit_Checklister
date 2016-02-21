/// <reference path="../../../typings/tsd.d.ts" />
module Services {
    "use strict";
    export interface IDashboardService {
        get(): any;
        all(): any;
        getTask(taskId: any): any;
    }
    export class Dashboard implements IDashboardService {
        user: any;
        constructor () {
           this.user = {
               id: "1",
               name: "Kiramishima",
               services: ["trello", "github"],
               Tasks: [
                   {type: "Github", task: "UX Design", id: "1x"},
                   {type: "Trello", task: "RAML Design", id: "2y"}
               ]
           }
        }
        get () {
            return this.user;
        }
        all () {
            return this.user.Tasks;
        }
        getTask (taskId: any) {
            for (var i = 0; i < this.user.Tasks.length; i++) {
                if (this.user.Tasks[i].id === taskId) {
                    return this.user.Tasks[i];
                }
            }
            return null;
        }
    }
}

angular.module("Checklister").service("Dashboard", Services.Dashboard);
