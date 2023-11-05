import { Injectable } from '@angular/core';
import { get } from 'http';
import { Empanada } from '../models/empanada';

@Injectable({
  providedIn: 'root'
})
export class EmpanadasService {
  empanadas: Empanada[];

  constructor() {
    this.empanadas = [{name: 'Jamon y Queso', price: 20, description: 'Empanada de jamon y queso', type: 'salada'}];
  }

  getEmpanadas(): Empanada[] {
    return this.empanadas;
  }

}
