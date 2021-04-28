import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Utils from '../../../shared/app.utils';
import { IAgency } from '../../../shared/models/agency';
import { AgencyPresenter } from '../agency.presenter';

@Component({
  selector: 'app-agency-edit',
  templateUrl: './agency-edit.container.html',
  providers: [AgencyPresenter],

})
export class AgencyEditContainerComponent implements OnInit {
  index:number
  constructor( 
    private readonly activatedRoute: ActivatedRoute,
    private router: Router,
    public presenter: AgencyPresenter,) { }

  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.params.id;
    const agency: IAgency[] = JSON.parse(Utils.getItemLocalStorage());
    if(agency==null || agency[this.index]==undefined ){
        this.router.navigate([`/agencies`]);
    }
    this.presenter.form.patchValue(agency[this.index])
  }

}
