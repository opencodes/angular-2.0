import { Component, OnInit } from '@angular/core';
import { PlaybookService } from '../playbook/shared/playbook.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[PlaybookService]
})
export class HomeComponent implements OnInit {

  constructor(private _service: PlaybookService) { }

  ngOnInit() {
  }

  updateData(value: boolean) {
    this._service.emitChange('Data from child');
  }

}
