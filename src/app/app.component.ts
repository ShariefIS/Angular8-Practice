import { Component } from '@angular/core';
import { Router, ActivationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heros';
  activeComp: string;
  constructor(private router: Router) {
    router.events.subscribe(
      (val) => {
        if (val instanceof ActivationStart) {
          this.activeComp = val.snapshot.routeConfig.path;
        }
      }
    );
  }
}
