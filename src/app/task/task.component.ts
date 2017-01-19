import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: any[];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this._taskService.getTasks();
  }

}
