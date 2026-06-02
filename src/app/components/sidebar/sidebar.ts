import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
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