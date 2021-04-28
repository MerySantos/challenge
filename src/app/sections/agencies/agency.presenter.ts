import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Injectable()
export class AgencyPresenter {
  form: FormGroup;
  agencia: FormControl;
  distrito: FormControl;
  provincia: FormControl;
  departamento: FormControl;
  direccion: FormControl;
  lat: FormControl;
  lon: FormControl;

  constructor(protected fb: FormBuilder) {
    this.createValidators();
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      agencia : this.agencia,
      distrito : this.distrito,
      provincia : this.provincia,
      departamento : this.departamento,
      direccion : this.direccion,
      lat : this.lat,
      lon : this.lon
      
    });
  }

  private createValidators(): void {
    this.agencia = new FormControl('');
    this.distrito = new FormControl('');
    this.provincia = new FormControl('');
    this.departamento = new FormControl('');
    this.direccion = new FormControl('');
    this.lat = new FormControl('');
    this.lon = new FormControl('');
  }
}
