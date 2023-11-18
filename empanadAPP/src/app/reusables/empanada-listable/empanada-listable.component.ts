import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Empanada } from 'src/app/models/empanada';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Profile } from 'src/app/models/profile';
import { EmpanadasService } from 'src/app/services/empanadas.service';

@Component({
  selector: 'app-empanada-listable',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule,MatIconModule, MatInputModule],
  templateUrl: './empanada-listable.component.html',
  styleUrls: ['./empanada-listable.component.scss']
})
export class EmpanadaListableComponent {
  @Input() empanadaData: Empanada = new Object() as Empanada;
  @Input() profileInject: Profile = new Object() as Profile;

  quantity: number = 0;

  constructor(private empanadasService: EmpanadasService) {

  }
  ngOnInit() {
    this.profileInject = new Profile(this.profileInject.name, this.profileInject.empanadaList);

    if (!(this.profileInject instanceof Profile)) {
      console.error('profileInject is not an instance of Profile');
      return;
    }
    this.quantity = this.profileInject.getEmpanadaQuantity(this.empanadaData);
  }

  decrementValue() {
    if (this.quantity > 0) {
      this.quantity--;
      this.updateListQuantity();
    }
  }

  incrementValue() {
    this.quantity++;
    this.updateListQuantity();
  }

  setValue() {
    if (this.quantity < 0) {
      this.quantity = 0;
      this.updateListQuantity();
    }
  }

  updateListQuantity() {
    this.profileInject.addEmpanada(this.empanadaData, this.quantity);
  }
}
