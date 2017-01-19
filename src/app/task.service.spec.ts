/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskService } from './task.service';



describe('TaskService', () => {
  let myTaskServiceInstance: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should ...', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

  it('should return tasks from the getTasks functions', () => {
    myTaskServiceInstance = TestBed.get(TaskService); 
    expect(myTaskServiceInstance.getTasks().length).toEqual(2)
  })

});
