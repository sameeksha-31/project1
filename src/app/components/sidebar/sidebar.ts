import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  showDashboard = false;

  showProjects = false;

  toggleDashboard() {
    this.showDashboard = !this.showDashboard;
  }

  toggleProjects() {
    this.showProjects = !this.showProjects;
  }

}
