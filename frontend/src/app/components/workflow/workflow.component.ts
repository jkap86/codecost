import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowStepComponent } from '../workflow-step/workflow-step.component';
import { WorkflowStep } from '../../models/workflow-step.model';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule, WorkflowStepComponent],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.css'
})
export class WorkflowComponent {
  steps: WorkflowStep[] = [
    {
      id: 1,
      title: 'LOE',
      expanded: false,
      options: ['LOE-1', 'LOE-2', 'LOE-3', 'LOE-4', 'LOE-5']
    },
    {
      id: 2,
      title: 'Epic',
      expanded: false,
      options: ['Epic-1', 'Epic-2', 'Epic-3', 'Epic-4']
    },
    {
      id: 3,
      title: 'Story',
      expanded: false,
      options: ['Story-1', 'Story-2', 'Story-3', 'Story-4', 'Story-5']
    },
    {
      id: 4,
      title: 'Task',
      expanded: false,
      options: ['Task-1', 'Task-2', 'Task-3', 'Task-4']
    },
    {
      id: 5,
      title: 'Subtask',
      expanded: false,
      options: ['Subtask-1', 'Subtask-2', 'Subtask-3']
    }
  ];

  toggleStep(step: WorkflowStep) {
    step.expanded = !step.expanded;
  }

  onCalculate() {
    console.log('Calculate button clicked');
    // TODO: Implement calculation logic
  }
}
