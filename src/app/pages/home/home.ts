import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-home',
  imports: [Sidebar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(
    public dashboardService: DashboardService
  ) {}

}