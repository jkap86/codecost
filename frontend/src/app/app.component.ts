import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface WorkflowStep {
  id: number;
  title: string;
  expanded: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  steps: WorkflowStep[] = [
    { id: 1, title: 'LOE', expanded: false },
    { id: 2, title: 'Epic', expanded: false },
    { id: 3, title: 'Story', expanded: false },
    { id: 4, title: 'Task', expanded: false },
    { id: 5, title: 'Subtask', expanded: false }
  ];

  toggleStep(step: WorkflowStep) {
    step.expanded = !step.expanded;
  }
}
