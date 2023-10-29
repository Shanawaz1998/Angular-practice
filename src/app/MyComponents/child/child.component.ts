import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  // @Input() item = 0;
  // @Input() data ={name: "", phone: "", email: ""};

  // @Output() updateDataEvent = new EventEmitter()

  userId: any = ''
  constructor(private route: ActivatedRoute){
  }

  ngOnInit(): void{
    this.userId=this.route.snapshot.paramMap.get('id')
      console.log(this.route.snapshot.paramMap.get('id'))
  }
}
