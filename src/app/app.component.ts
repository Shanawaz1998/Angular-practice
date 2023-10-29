import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {UserDetailsService} from './Services/user-details.service'
import { CallingApiService } from './Services/calling-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-todo-list';
  displayValue:String = '';
  count:number=0;
  isDisabled=false;
  checkIfElse= 'cat';
  inputValue="check";
  color="yellow"
  toggle=true
  number=10;
  date = Date();

  toCheckForLoop = ['apple','ball','cat','dog'];
  obj = [
    {name:'Shanawaz', email:'bahadurShanawaz@gmail.com', phone:'12312312423'},
    {name:'Aarif', email:'AarifShaikh@gmail.com', phone:'9374882436'}
  ]
  getValue(arg: String){
    this.displayValue=arg;
  }
  counter(type:String){
    type==='add' ? this.count++ : this.count--;
  }
  changeTheColor(){
    this.color = 'green';
  }
  doToggle(){
    this.toggle= !this.toggle;
  }
  changeNumber(){
    this.number = Math.floor(Math.random()*10)
  }
  updateEvent(value:String){
    alert(value)
  }



  // Learning Service
  // userDataService:any=[];
  // constructor(private userData: UserDetailsService){
  //   this.userDataService= userData.userDetails()
  // }

  //Calling API
  dataApi:any=[];
  // constructor(private userData : CallingApiService){
  //   userData.user().subscribe((data)=>{
  //     this.dataApi = data;
  //     console.log('data', data)
  //   })
  // }



  //Saving the data into the list through api
  // saveDetails(value:any){
  //   console.log("data", value);
  //   this.userData.saveUser(value).subscribe((response)=>{
  //     console.log("response", Response)
  //   })
  // }

  //Lazing loading for Components (Components included are : admin-ll and user-ll)

  constructor(private viewContainer : ViewContainerRef, private cfr : ComponentFactoryResolver ){}
  async loadAdmin(){
    this.viewContainer.clear;
    const {AdminLLComponent} = await import('./MyComponents/admin-ll/admin-ll.component');

    this.viewContainer.createComponent(this.cfr.resolveComponentFactory(AdminLLComponent))
  }

}
