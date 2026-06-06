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

  showProjectDetails = false;
  selectedProject: any = null;

  constructor(
    public dashboardService: DashboardService
  ) {}

  openProject(project: any) {
    this.selectedProject = project;
    this.showProjectDetails = true;
  }

  closeProjectModal() {
    this.showProjectDetails = false;
  }

  projects = [
    {
      id: 'PROJ-001',
      name: 'CI/CD Automation Platform',
      description: 'End-to-end CI/CD automation platform',
      state: 'Active',
      visibility: 'Private',
      url: 'https://dev.azure.com/project1'
    },
    {
      id: 'PROJ-002',
      name: 'Infrastructure Monitoring',
      description: 'Infrastructure monitoring system',
      state: 'Active',
      visibility: 'Private',
      url: 'https://dev.azure.com/project2'
    },
    {
      id: 'PROJ-003',
      name: 'Cloud Cost Optimizer',
      description: 'Cloud cost optimization solution',
      state: 'Active',
      visibility: 'Public',
      url: 'https://dev.azure.com/project3'
    },
    {
      id: 'PROJ-004',
      name: 'Release Management Portal',
      description: 'Release management platform',
      state: 'Active',
      visibility: 'Private',
      url: 'https://dev.azure.com/project4'
    },
    {
      id: 'PROJ-005',
      name: 'Log Analytics Dashboard',
      description: 'Log analytics system',
      state: 'Active',
      visibility: 'Private',
      url: 'https://dev.azure.com/project5'
    },
    {
      id: 'PROJ-006',
      name: 'Container Deployment Manager',
      description: 'Kubernetes deployment manager',
      state: 'Critical',
      visibility: 'Private',
      url: 'https://dev.azure.com/project6'
    }
  ];
}