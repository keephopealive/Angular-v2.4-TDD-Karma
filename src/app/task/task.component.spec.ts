import { TaskService } from './../task.service';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let myComponentInstance: TaskComponent;
  let myTaskServiceInstance: TaskService;
  let fixture: ComponentFixture<TaskComponent>; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ], // Declare the component
      providers: [TaskService]
    }).compileComponents(); 
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(TaskComponent); // Returns component fixture (access to the component instance)
    myComponentInstance = fixture.componentInstance; // Retrieving the component instance
    expect(myComponentInstance).toBeTruthy(); // Validates if component exists.
  });

  it('should have the first li with the first task...', () => {
    fixture = TestBed.createComponent(TaskComponent); // Returns component fixture (access to the component instance)
    myComponentInstance = fixture.componentInstance; // Retrieving the component instance
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain(myComponentInstance.tasks[0].title);
  });

  it('should have the tasks array', () => {
    fixture = TestBed.createComponent(TaskComponent); // Returns component fixture (access to the component instance)
    myComponentInstance = fixture.componentInstance; // Retrieving the component instance
    myTaskServiceInstance = fixture.debugElement.injector.get(TaskService)
    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(myComponentInstance.tasks).toEqual(myTaskServiceInstance.tasks);
  });



});
