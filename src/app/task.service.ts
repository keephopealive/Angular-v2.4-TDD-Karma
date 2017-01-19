import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  tasks: any[] = [
    { title: "First Task" },
    { title: "Second Task" }
  ]

  getTasks(){
    return this.tasks;
  }

  constructor() { }

}
