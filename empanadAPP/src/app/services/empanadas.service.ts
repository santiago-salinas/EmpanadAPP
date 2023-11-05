import { Injectable } from '@angular/core';
import { Empanada } from '../models/empanada';

@Injectable({
  providedIn: 'root'
})
export class EmpanadasService {
  empanadas: Empanada[];

  constructor() {
    this.empanadas = [
      {name: 'Jamon y Queso',
      price: 20,
      description: 'Empanada de jamon y queso',
      type: 'salada'},
      {name: 'Carne',
      price: 20,
      description: 'Empanada de carne',
      type: 'salada'},
      {name: 'Pollo',
      price: 20,
      description: 'Empanada de pollo',
      type: 'salada'},
      {name: 'Chocolate',
      price: 20,
      description: 'Empanada de chocolate',
      type: 'dulce'},];
  }

  getEmpanadas(): Empanada[] {
    return this.empanadas;
  }

}
