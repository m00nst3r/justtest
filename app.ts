import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';


@Component({
 selector: 'my-app',
 injectables: [FriendsService]
})
@View({
 templateUrl: './templates/app.html',
 directives: [NgFor, NgIf]
})

class DisplayComponent{
 myName: string;
 names: Array<string>;

 constructor(friendsService: FriendsService){
  this.myName = "Alice";
  this.names = friendsService.names;
 }
}

class FriendsService{
 names: Array<string>;
 constructor(){
  this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
 }
}

bootstrap(DisplayComponent);
