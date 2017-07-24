<div class="text-center">
  <ul *ngIf="pager.pages && pager.pages.length" class="pagination">
    <li [ngClass]="{disabled:pager.currentPage === 1}">
      <a (click)="setPage(1)">First</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === 1}">
      <a (click)="setPage(pager.currentPage - 1)">Previous</a>
    </li>
    <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}">
      <a (click)="setPage(page)">{{page}}</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">
      <a (click)="setPage(pager.currentPage + 1)">Next</a>
    </li>
    <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">
      <a (click)="setPage(pager.totalPages)">Last</a>
    </li>
  </ul>
</div>
import { Component, OnInit, Output, OnChanges, Input, EventEmitter } from '@angular/core';
import { PagerService } from './pager.service'

@Component({
  selector: 'cbn-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
  providers : [PagerService]
})
export class PagerComponent implements OnInit {
  
  @Input() Data: any[];
  @Input() size:number;
  @Output() setPageCb = new EventEmitter();

  constructor(private pagerService: PagerService) { }
  private allItems: any[];
  pager: any = {};
  pagedItems: any[];

  ngOnInit() {
    this.allItems = this.Data;
    if(this.allItems && this.allItems.length){
      this.setPage(1);
    }    
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.allItems.length, page, this.size || 10);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.setPageCb.emit(this.pager);
  }

}
import { Injectable } from '@angular/core';

@Injectable()
export class PagerService {
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = [];
    for(let k=startPage; k <= endPage; k++){
      pages.push(k);
    }
    //_.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
updateIRSPaging(pager) {
        this.irsStartIndex = pager.startIndex;
        if (pager.currentPage > 1) {
            this.currentPageIRS = this.irs.slice(pager.startIndex, pager.endIndex + 1);
        } else {
            if (this.pagerInitializedForIRS) {
                this.currentPageIRS = this.irs.slice(pager.startIndex, pager.endIndex + 1);
            }
            this.pagerInitializedForIRS = true;
        }
    }
    getIRS() {
        this.loadingIRS = true;
        this.irs = [];
        this.dashboardService.pullData('irs', {
            "ecid": this.ecid
        }).subscribe(result => {
            this.apiCallCount -= 1;
            if (Array.isArray(result.data)) {
                this.irs = result.data;
                this.implementationRowCount += result.data.length;
            }
            if (this.apiCallCount == 0) {
                this.drawChart();
            }
            this.loadingIRS = false;
            this.currentPageIRS = this.irs.slice(0, this.pageSize);
            this.pagerInitializedForIRS = false;

        }, err => {

            this.apiCallCount -= 1;
            this.loadingIRS = false;
            this.pagerInitializedForIRS = false;
            if (this.apiCallCount == 0) {
                this.drawChart();
            }
        });
    }
    pageSize: number = 10;
    currentPageIRS: any[] = [];
    pagerInitializedForIRS: boolean = false;
    currentPageCases: any[] = [];
    pagerInitializedForCases: boolean = false;
    currentPageClientDocs: any[] = [];
    pagerInitializedForClientDocs: boolean = false;
    irsStartIndex: number = 0;
    activeId;
    loadingAORs: boolean = false;
    AORs: any[] = [];
    AORHeader: any;
    currentPageAORs: any[] = [];
    pagerInitializedForAORs: boolean = false;
    navigatorPaging: number = 5;
    constructor(private dashboardService: DashboardService) { }
<div *ngIf="irs.length >= 1">
                    <cbn-pager [Data]="irs" [size]="pageSize" (setPageCb)="updateIRSPaging($event)"></cbn-pager>
                </div>
