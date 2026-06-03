import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  showDashboard = false;

  showDevOps = false;

  showProjects = false;

  toggleDashboard() {
    this.showDashboard = !this.showDashboard;
  }

  toggleDevOps() {
    this.showDevOps = !this.showDevOps;
  }

  toggleProjects() {
    this.showProjects = !this.showProjects;
  }

}