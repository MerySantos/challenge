import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import Utils from '../../../shared/app.utils';
import { IAgency } from '../../../shared/models/agency';

@Component({
  selector: 'app-agency-edit-ui',
  templateUrl: './agency-edit.component.html',
  styleUrls: ['./agency-edit.component.scss']
})
export class AgencyEditComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() index: number;
  @ViewChild('map', {static: true} ) mapElement: any;
  map: google.maps.Map;  

  constructor(private router: Router,) { }

  ngOnInit(): void {
    const mapProperties = {
      center: new google.maps.LatLng(this.form.get('lon').value, this.form.get('lat').value),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
  }

  save(): void{
    let agencies: IAgency[] = JSON.parse(Utils.getItemLocalStorage());
    agencies[this.index] = this.form.value
    Utils.removeItemLocalStorage()
    Utils.setDataLocalStorage(agencies)
    this.router.navigate([`/agencies`]);
  }

}
