import { Component } from '@angular/core';

import { HighlightDirective } from './highlight.directive';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ HighlightDirective ]
})
export class AppComponent {
  title = 'app works!';
}
