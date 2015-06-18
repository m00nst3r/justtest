var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var DisplayComponent = (function () {
    function DisplayComponent(friendsService) {
        this.myName = "Alice";
        this.names = friendsService.names;
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            injectables: [FriendsService]
        }),
        angular2_1.View({
            templateUrl: './templates/app.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        })
    ], DisplayComponent);
    return DisplayComponent;
})();
var FriendsService = (function () {
    function FriendsService() {
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
    return FriendsService;
})();
angular2_1.bootstrap(DisplayComponent);
