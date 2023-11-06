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
//import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-profile-listable',
  templateUrl: './profile-listable.component.html',
  styleUrls: ['./profile-listable.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule,MatIconModule, MatInputModule],
})
export class ProfileListableComponent {
  @Input() profileData: Profile = new Object() as Profile;
  @Input() pageInject: Profile[] = [];

  active: boolean = false;

  getTotalQuantity(empanadaList: any[]): number {
    return empanadaList.reduce((total, empanada) => total + empanada.quantity, 0);
  }

  getTotalPrice(empanadaList: any[]): number {
    return empanadaList.reduce((totalPrice, empanada) => {
      const empanadaPrice = empanada.empanada.price * empanada.quantity;
      return totalPrice + empanadaPrice;
    }, 0);
  }
  
}
