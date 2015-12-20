/// <reference path="../typings/tsd.d.ts" />

import {Component}         from 'angular2/core';
import {TaskComponent} from './task.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [TaskComponent]
})

export class AppComponent { }