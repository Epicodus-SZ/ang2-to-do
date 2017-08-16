import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: "./app/app.component.html"
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedTask: Task = null;

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course',3),
    new Task('Begin brainstorming possible JavaScript group projects',2),
    new Task('Add README file to last few Angular repos on GitHub',2)
  ];

  finishedEditing() {
    this.selectedTask = null;
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  addTask(newTaskFromChild: Task) {
    this.masterTaskList.push(newTaskFromChild);
  }

} // end of Appconponent
