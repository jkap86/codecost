import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowStep } from '../../models/workflow-step.model';

@Component({
  selector: 'app-workflow-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workflow-step.component.html',
  styleUrl: './workflow-step.component.css'
})
export class WorkflowStepComponent {
  @Input() step!: WorkflowStep;
  @Input() isLast: boolean = false;
  @Output() toggle = new EventEmitter<WorkflowStep>();

  onToggle() {
    this.toggle.emit(this.step);
  }
}
