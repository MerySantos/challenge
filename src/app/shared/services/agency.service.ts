import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAgency } from '../models/agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor() { }

  private agency: IAgency[];
  private agency$ = new BehaviorSubject<IAgency[]>([]);

  getagency$(): Observable<IAgency[]> {
    return this.agency$.asObservable();
  }

  setagency(agency: IAgency[]): void {
    this.agency = agency;
    this.agency$.next(this.agency);
  }
}
