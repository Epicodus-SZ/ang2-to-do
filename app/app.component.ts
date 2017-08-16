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

  finishedEditing() {
    this.selectedTask = null;
  }

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }


} // end of Appconponent
