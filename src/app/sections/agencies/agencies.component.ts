import { Component, OnInit } from '@angular/core';
import { IAgency } from '../../shared/models/agency';
import Utils from '../../shared/app.utils';
import { DATA_BASE } from '../../shared/constants/data';
import { AgencyPresenter } from './agency.presenter';

const keyLS = 'keyData'
@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.scss'],

})
export class AgenciesComponent implements OnInit {
  texto:string;
  naturales:any = [{number:1, text:'uno'},{number:2, text:'dos'},{number:3, text:'dos'}]
  agencies: IAgency[];

  constructor() { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    if(!Utils.getItemLocalStorage()) 
      Utils.setDataLocalStorage(DATA_BASE)

    this.agencies = JSON.parse(Utils.getItemLocalStorage());
  }

  getPath(id){
    return `/edit/${id}`
  }

  getTexto(number:number){
    let texto:string;
    if(number<10){
      const natural = this.naturales.array.forEach(element => {
        return element.number == number
      });
      if(natural!=-1){
        this.texto= natural.text
      }
      console.log(texto)
    }
    console.log(number%2);
  }

}
