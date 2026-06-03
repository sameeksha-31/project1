import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  showLogout = false;

  showDashboard = false;

  showDevOps = false;

  showProjects = false;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  toggleLogout() {
    this.showLogout = !this.showLogout;
  }

  toggleDashboard() {
    this.showDashboard = !this.showDashboard;
  }

  toggleDevOps() {
    this.showDevOps = !this.showDevOps;
  }

  toggleProjects() {
    this.showProjects = !this.showProjects;
  }

  logout() {

    this.authService.logout();

    this.router.navigate(['/login']);

  }

}