import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../app.component.spec';

@Component({
  selector: 'app-project1-alerts',
  templateUrl: './project1-alerts.component.html',
  styleUrls: ['./project1-alerts.component.css']
})
export class Project1AlertsComponent {
  @Output() notify = new EventEmitter();
  @Input() product! : Product | undefined;

}
