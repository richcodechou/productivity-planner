import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'productivity-planner';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly isProduction = (environment as any).production;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly firebaseProjectId = (environment as any).firebaseConfig.projectId;
}
