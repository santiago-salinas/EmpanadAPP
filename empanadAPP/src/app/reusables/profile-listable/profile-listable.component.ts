import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { Empanada } from 'src/app/models/empanada';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Profile } from 'src/app/models/profile';
import { EmpanadasService } from 'src/app/services/empanadas.service';
@Component({
  selector: 'app-profile-listable',
  templateUrl: './profile-listable.component.html',
  styleUrls: ['./profile-listable.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatCardModule,MatIconModule],
})
export class ProfileListableComponent {
  @Input() profileData: Profile = new Object() as Profile;
  @Input() isChecked = false;

  constructor(private cdr: ChangeDetectorRef,private empanadasService: EmpanadasService) {
  }

  getTotalQuantity(empanadaList: any[]): number {
    return empanadaList.reduce((total, empanada) => total + empanada.quantity, 0);
  }

  getTotalPrice(empanadaList: any[]): number {
    return empanadaList.reduce((totalPrice, empanada) => {
      const empanadaPrice = empanada.empanada.price * empanada.quantity;
      return totalPrice + empanadaPrice;
    }, 0);
  }

  onChanged($event:any) {
    console.log("Before"+this.isChecked);
    this.isChecked = $event && $event.target && $event.target.checked;
    console.log("After"+this.isChecked);
    if(this.isChecked){
      this.empanadasService.addActiveProfile(this.profileData);
    }else{
      this.empanadasService.removeActiveProfile(this.profileData);
    }
  }

  onBlur($event:any) {
    console.log("Before"+this.isChecked);
    this.isChecked = $event && $event.target && $event.target.checked;
    console.log("After"+this.isChecked);
  }

  deleteProfile(){
    this.empanadasService.deleteProfile(this.profileData);
    window.location.reload();
  }
}
