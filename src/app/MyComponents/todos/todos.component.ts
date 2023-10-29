import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
    title="from ts file"
    taskList:any []=[];
    createTask(value:String){
      this.taskList.push({id: this.taskList.length, name:value});
      console.log(this.taskList)
    }
    removeTask(id:number){
      this.taskList= this.taskList.filter(item => item.id !== id);
    }
}
