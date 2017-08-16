// 3 things needs for all components
//
//  1. import statement in app.module.ts
//  2. Added to the declarations list in app.module.ts
//  3. place the child component in the parent as <task-list></task-list>

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allTasks">All Tasks</option>
      <option value="completedTasks">Completed Tasks</option>
      <option value="incompleteTasks" selected="selected">Incomplete Tasks</option>
    </select>
    <ul>
      <li (click)="isDone(currentTask)" *ngFor="let currentTask of childTaskList | completeness:filterByCompleteness">{{currentTask.description}} {{currentTask.priority}}
        <input *ngIf="currentTask.done === true" type="checkbox" checked (click)="toggleDone(currentTask, false)"/>
        <input *ngIf="currentTask.done === false" type="checkbox" (click)="toggleDone(currentTask, true)"/>
        <button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button>
      </li>
    </ul>
  `
})

export class TaskListComponent {


// to get inputs to work you need to...
// 1. Add import Input from ang-core
// 2. Add a @Input() variable to component
// 3. Pass data from parent using <task-list [childTaskList]="masterTaskList"></task-list>
  @Input() childTaskList: Task[];

//to get outputs to work you need to...
// 1. Import Output and EventEmitter from ang-core
// 2. Create and instantiate and @Output eventSender object
// 3. call the .emit method on the eventSender object for each action you want to pass
// 4. add (clickSender)="editTask($event)" to the child component bracket item in the parents template.

  @Output() clickSender = new EventEmitter();

  //used by task filter component
  filterByCompleteness: string = "incompleteTasks"

  toggleDone(clickedTask: Task, setCompleteness: boolean) {
    clickedTask.done = setCompleteness;
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }

  priorityColor(currentTask: Task){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      //alert("This task is done!");
    } else {
      //alert("This task is not done. Better get to work!");
    }
  }

}
