import { Component } from '@angular/core';
import { PlaybookService } from './playbook/shared/playbook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlaybookService]
})
export class AppComponent {
  title = 'app works!';

  constructor(
    private _sharedService: PlaybookService
  ) {
    _sharedService.changeEmitted$.subscribe(
      text => {
        console.log(text);
      });
  }

}
