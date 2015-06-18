import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

class FriendsService{
 names: Array<string>;
 constructor(){
  this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
 }
}

@Component({
 selector: 'my-app',
 appInjector: [FriendsService]
})
@View({
 templateUrl: './template/app.html',
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

bootstrap(DisplayComponent);
