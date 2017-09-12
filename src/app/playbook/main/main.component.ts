import { Component, OnInit } from '@angular/core';
import { PlaybookService } from '../shared/playbook.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [PlaybookService]
})
export class MainComponent implements OnInit {

  id: number;
  private sub: any;

  constructor(
    private _sharedService: PlaybookService,
    private route: ActivatedRoute,
     private router: Router
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnInit() {
   
    //this.router.navigate([{outlets: {rightrails: 'right'}}]);
    this.router.navigate([ {outlets: { rightrails: 'right/id/1'}}]);


  }

  updateData(value: boolean) {
       this.id++;
       this.router.navigate([ {outlets: { rightrails: 'right/id/'+this.id}}]);

  }

}
