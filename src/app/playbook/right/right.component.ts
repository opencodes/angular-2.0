import { Component, OnInit } from '@angular/core';
import { PlaybookService } from '../shared/playbook.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers: [PlaybookService]
})
export class RightComponent implements OnInit {
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
     console.log('right----------');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

   updateData(value: boolean) {
     let id = Math.random();
       console.log(id);
       this.router.navigate([{outlets: { primary: 'playbook/id/'+id}}]);

  }

}
