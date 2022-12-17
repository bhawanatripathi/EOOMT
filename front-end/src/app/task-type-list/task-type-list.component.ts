import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-task-type-list',
  templateUrl: './task-type-list.component.html',
  styleUrls: ['./task-type-list.component.css']
})
export class TaskTypeListComponent implements OnInit {
  public data:string[];
  public selectedTask: string;
  public sideBarOpen: boolean;
	
  constructor(private router: Router) { 
    this.selectedTask='';
    this.data=["onboarding","offboarding","transfer"];
    this.sideBarOpen= true;
  }

  ngOnInit(): void {
  }

  onSelected(value:string): void {
		this.selectedTask = value;
    console.log(this.selectedTask);
	}
  
  tasklist(value:string):string[]{
    return ['a','b','c']
  }
  sideBarToggler(){
    this.sideBarOpen= !this.sideBarOpen;
  }
}
