# Frontend Code Structure

This document outlines the structure of the Code Cost Dashboard frontend application.

## Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── workflow/
│   │   │   │   ├── workflow.component.ts
│   │   │   │   ├── workflow.component.html
│   │   │   │   └── workflow.component.css
│   │   │   └── workflow-step/
│   │   │       ├── workflow-step.component.ts
│   │   │       ├── workflow-step.component.html
│   │   │       └── workflow-step.component.css
│   │   ├── models/
│   │   │   └── workflow-step.model.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.css
│   └── main.ts
└── package.json
```

## Component Overview

### App Component (`app.component.ts`)
- **Purpose**: Root component of the application
- **Responsibilities**:
  - Display the main dashboard header
  - Container for the workflow component
- **Key Properties**:
  - `title`: Dashboard title displayed in the header

### Workflow Component (`components/workflow/workflow.component.ts`)
- **Purpose**: Container component for managing the workflow steps
- **Responsibilities**:
  - Manages the list of workflow steps (LOE, Epic, Story, Task, Subtask)
  - Handles step toggle events
  - Passes step data to child components
- **Key Properties**:
  - `steps`: Array of WorkflowStep objects
- **Key Methods**:
  - `toggleStep(step: WorkflowStep)`: Toggles the expanded state of a step

### Workflow Step Component (`components/workflow-step/workflow-step.component.ts`)
- **Purpose**: Reusable component for individual workflow steps
- **Responsibilities**:
  - Displays a single workflow step
  - Renders expandable search input
  - Shows arrow between steps (except for the last one)
- **Inputs**:
  - `step`: WorkflowStep object containing step data
  - `isLast`: Boolean indicating if this is the last step
- **Outputs**:
  - `toggle`: EventEmitter that notifies parent when step is clicked

## Data Models

### WorkflowStep (`models/workflow-step.model.ts`)
```typescript
interface WorkflowStep {
  id: number;
  title: string;
  expanded: boolean;
}
```

## Styling

### Global Styles (`styles.css`)
- Resets default margins and padding
- Sets box-sizing to border-box for all elements

### App Component Styles (`app.component.css`)
- Dark blue background (#1a2332)
- Centered white header
- Full viewport height container

### Workflow Component Styles (`components/workflow/workflow.component.css`)
- Container with max-width of 400px
- Centered workflow steps

### Workflow Step Component Styles (`components/workflow-step/workflow-step.component.css`)
- Dark blue step cards with borders
- Hover effects
- Smooth slide-down animation for expanded content
- Styled search input with focus states
- SVG arrow between steps

## How to Extend

### Adding a New Workflow Step
1. Edit `workflow.component.ts`
2. Add a new object to the `steps` array:
   ```typescript
   { id: 6, title: 'New Step', expanded: false }
   ```

### Creating a New Component
```bash
cd frontend
npx ng generate component components/your-component-name --skip-tests
```

### Adding a New Service
```bash
cd frontend
npx ng generate service services/your-service-name --skip-tests
```

### Adding a New Model
1. Create a new file in `src/app/models/`
2. Export the interface:
   ```typescript
   export interface YourModel {
     // properties
   }
   ```

## Development Commands

- `npm start`: Start development server
- `npm run build`: Build for production
- `ng generate component`: Generate new component
- `ng generate service`: Generate new service
